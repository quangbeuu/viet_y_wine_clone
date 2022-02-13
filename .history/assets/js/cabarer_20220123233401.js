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
            <a href="https://vietywine.com/amarone-della-valpolicella" title="Amarone Della Valpolicella" class="wine__cabaret-link">
                <div class="wine__cabaret-img">
                    <img src="https://vietywine.com/Content/AdminContent/uploadsimages/R%C6%B0%E1%BB%A3u/Monteverdi/AMA.jpg" alt="Amarone Della Valpolicella">
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

