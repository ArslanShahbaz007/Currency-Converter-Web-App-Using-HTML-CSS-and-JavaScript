const populate = async (base, value) => {
    let mystr = '';
    let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_6iqzQHzECXt4ZmlJ4tOoXRXvjIzBQNlh43JZ5fh7&base_currency=" + base;
    let response = await fetch(url);
    let finalresponse = await response.json();
    document.querySelector(".output").style.display="block";
    for (let key of Object.keys(finalresponse["data"])) {
        mystr += `
        <tr>
        <td>${key}</td>
        <td>${finalresponse["data"][key]["code"]}</td>
        <td>${finalresponse["data"][key]["value"]*value}</td>
        </tr>
        `
        let tablebody = document.querySelector("tbody");
        tablebody.innerHTML=mystr;
    }

}
let btn = document.querySelector('.btn');
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(currency, value);
});


