async function getAlldata()
{
    //const responnse = await fetch('https://api.publicapis.org/entries');

    try {

         const response = await fetch('https://api.publicapis.org/entries');
         const data = await response.json();
         console.log(data);        
    } catch (error) {
        console.log(error);
        
    }
}
getAlldata();