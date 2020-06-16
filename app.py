from flask import Flask, request, render_template, redirect, url_for, flash
import folium
from tinydb import TinyDB
import sqlite3

app = Flask(__name__)
app.secret_key = "super secret key"

@app.route('/')
def index():
    x_list =[]
    y_list =[]
    shop_list = []
    tel_list =[]
    addr_list=[]

    conn= sqlite3.connect('flask_sql.db')
    cursor = conn.cursor()
    sql = "select * from goodFried order by jijum"
    cursor.execute(sql)
    rows = cursor.fetchall()

    for i in rows:
        x_list.append(i[3])
        y_list.append(i[4])
        shop_list.append(i[0])
        tel_list.append(i[1])
        addr_list.append(i[2])

    folium_map = folium.Map(location=(36.349031,127.397005), zoom_start=7)

    for shop in range(len(y_list)):
       folium.Marker(location=(float(y_list[shop]),float(x_list[shop])),icon=folium.Icon(color='red',icon='glyphicon glyphicon-send')).add_to(folium_map)

    folium_map.save('templates/map.html')
    return render_template('index.html',s=shop_list,t=tel_list,a=addr_list)

@app.route('/map')
def map():
    return render_template('map.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')


@app.route('/search_proc', methods=['GET'])
def search_proc():
    keyword = request.args.get('keyword')
    s_search = request.args.get('s_search')
    conn= sqlite3.connect('flask_sql.db')
    cursor = conn.cursor()
    sql = "select * from goodFried where {} like '%{}%'".format(keyword,s_search)
    #print(sql)
    cursor.execute(sql)
    rows = cursor.fetchall()

    return rows

@app.route('/search')
def search():
    lists = search_proc()
    if not lists:
        flash('해당 결과가 존재하지 않습니다.')
        return redirect('/')
    else:
        folium_map = folium.Map(location=(float(lists[0][4]),float(lists[0][3])), zoom_start=14)
        for i in range(len(lists)):
            folium.Marker(location=(float(lists[i][4]),float(lists[i][3])),popup=lists[i][0],icon=folium.Icon(color='red',icon='glyphicon glyphicon-send')).add_to(folium_map)

        folium_map.save('templates/search_map.ht ml')

    return render_template('search.html',lists=lists)


@app.route('/search_map')
def search_map():
    return render_template('search_map.html')




if __name__ == "__main__":
    app.debug = True
    app.run(port=5050)

