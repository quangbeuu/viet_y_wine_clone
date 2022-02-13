const loadData = async() =>{
    try{
        const response = await fetch("http://localhost:8888/wine");
        const data = await response.json();
        console.log(data.wine);
    }
    catch(error){
        console.log(error);
    }
}