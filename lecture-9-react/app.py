import os
import flask
import flask_socketio
import flask_sqlalchemy
import psycopg2

app = flask.Flask(__name__)
# import models
# from models import *

socketio = flask_socketio.SocketIO(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://joyjoy:joyjoy@localhost/postgres'  
db = flask_sqlalchemy.SQLAlchemy(app)

@app.route('/')
def hello():
    return flask.render_template('index.html')
    
@socketio.on('connect') 
def on_connect():
    print('Someone connected!')
    flask_socketio.emit('update', {
        'data': 'Got your connection!'
    })
@socketio.on('disconnect')
def on_disconnect():
    print ('Someone disconnected!')

    
    
if __name__ == '__main__':
    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=True
    )


