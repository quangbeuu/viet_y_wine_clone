const loadData = async() =>{
    try{
        const response = await fetch("http://localhost:8888/wine");
        const data = await response.json();
    }
    catch(error){
        console.log(error);
    }
}

const displayWines = (data) => {
    const htmlString = data.map((wine)=>{
        return `
        <div class="wine__cabaret-item">
            <a href="https://vietywine.com/amarone-della-valpolicella" title="${wine.header}" class="wine__cabaret-link">
                <div class="wine__cabaret-img">
                    <img src="${wine.wine_image}" alt="Amarone Della Valpolicella">
                </div>
                <div class="wine__cabaret-text">
                    <h4>AMARONE</h4>
                    <p>Amarone Della Valpolicella</p>
                </div>
            </a>
        </div>
        `
    })
}

