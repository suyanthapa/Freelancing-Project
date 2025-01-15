

const api = process.env.api;

const getJokes = async (req,res)=>{

  try{
    const responses = await fetch("https://api.chucknorris.io/jokes/random");
    const extractData = await responses.json(); 
    const joke = extractData.value; 
    let jokes=joke.replace(/Chuck Norris/, "Bishal");
    return res.json({jokes})

 }
catch (e){
  return res.json({error: e.message})
}

}

export default getJokes;