window.addEventListener("load",function(){

    const cabaretContent = document.querySelector(".wine__cabaret-content");
    const loadData = async() =>{
        try{
            const response = await fetch("http://localhost:8888/wine");
            const data = await response.json();
            displayWines(data);
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
                        <img src="${wine.wine_image}" alt="${wine.header}">
                    </div>
                    <div class="wine__cabaret-text">
                        <h4>${wine.header}</h4>
                        <p>${wine.header}</p>
                    </div>
                </a>
            </div>
            `
        })
        .join("");
        cabaretContent.innerHTML = htmlString;
    }
    loadData();

    handleWord(){
        
    }
})    
