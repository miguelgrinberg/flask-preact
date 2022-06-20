from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        rating = request.form.get('rating')
        print('A new rating has been received: ', rating)
    return render_template('index.html')
