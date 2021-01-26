from flask import Flask, request, render_template
from cloudgym import cloudgym_requests as req

app = Flask(__name__)

@app.route('/', methods =["GET", "POST"])
def root(): 
    if request.method == "POST":        
        email = request.form.get("email")
        birthday = request.form.get("birthday")
        if email and birthday:
            content = req.get_aulas(email, birthday)
            if content:
                return render_template("form_classes.html", content=content, email=email, birthday=birthday)                   
    return render_template("index.html")

@app.route('/form_classes.html', methods =["GET", "POST"])
def form_classes(): 
    if request.method == "POST":
        email = request.form.get("email")
        birthday = request.form.get("birthday")
        date = request.form.get("date")
        aulas = request.form.getlist("checkbox")
        if aulas and email and birthday and date:
            response = parse_http_client_post(email, birthday, date, aulas)
            if response:
                return render_template("cloudgym_response.html", response=response)
    return render_template("index.html")    

def parse_http_client_post(email, birthday, date, aulas):
    cloudgym_response_register_class = list()
    for i in range(len(aulas)):                       
        r = req.register_class(email, birthday, date, aulas[i])
        cloudgym_response_register_class.append(r)            
    cloudgym_response_register_class = req.response_code_translator(cloudgym_response_register_class)            
    return cloudgym_response_register_class
            
@app.after_request
def add_header(r):
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r
