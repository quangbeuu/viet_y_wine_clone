const loadData = async() =>{
    try{
        const response = await fetch("http://localhost:8888/wine")
    }
    catch(error){
        console.log(error);
    }
}