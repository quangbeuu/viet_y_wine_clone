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
        
    })
}

