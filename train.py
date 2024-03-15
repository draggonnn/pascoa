from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    products = [
        {"name": "Ovo de Páscoa Tradicional", "price": "R$ 25,00", "image": "ovo1.jpg"},
        {"name": "Ovo de Páscoa Crocante", "price": "R$ 30,00", "image": "ovo2.jpg"},
        {"name": "Ovo de Páscoa com Frutas", "price": "R$ 35,00", "image": "ovo3.jpg"},
        {"name": "Ovo de Páscoa Trufado", "price": "R$ 40,00", "image": "ovo4.jpg"},
        {"name": "Ovo de Páscoa Vegano", "price": "R$ 35,00", "image": "ovo5.jpg"},
        {"name": "Ovo de Páscoa Sem Açúcar", "price": "R$ 30,00", "image": "ovo6.jpg"}
    ]
    return render_template('index.html', products=products)

if __name__ == '__main__':
    app.run(debug=True)
