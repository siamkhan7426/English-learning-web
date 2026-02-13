
// api call lesion 
const dynamicBtnLesionApiCall = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/levels/all")
    const data = await res.json()
    displayDynamicBtnLesion(data.data)
};

// ----------------------------spinner function --------------------------------

const spinnerRemove = () =>{
  const spinner = document.getElementById("spinner-loading").classList.remove("hidden");
  
};
const spinnerAdd = () =>{
  const spinner = document.getElementById("spinner-loading").classList.add("hidden");
  
};




// ----------------------------------------- displyDynamicCardSection ----------------------------------
const displyCardSection = (id)=>{
   spinnerAdd() 
const cardSection = document.getElementById("card-section");
cardSection.innerHTML = ""
if(id.length == 0){
  cardSection.innerHTML = `
  <div class="col-span-full  mx-auto mt-10">
      <div class="text-center">
      <img class="w-auto mx-auto" src="./assets/alert-error.png" alt="" srcset="">
      </div>
        <div class=" text-center space-y-3">
          <p class="font-semibold font-bangla text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
           <h2 class="text-2xl font-semibold font-bangla">নেক্সট Lesson এ যান</h2>
        </div>
    </div>
    `
    
};
  id.forEach(cardId => {
    const {word,meaning,pronunciation} = cardId
    const div = document.createElement("div");
    div.innerHTML = `
     <div  class=" border rounded-sm py-6 space-y-4 ">
        <div class=" text-center">
          <h2 class="text-2xl font-semibold">${word? word:"কোনো word পাওযা যাইনি"}</h2>
          <p class="font-semibold">Meaning /Pronounciation</p>
          <h3 class="mb-4">"${meaning ? meaning: "কোনো meaning পাওযা যাইনি"} / ${pronunciation? pronunciation : "কোনো pronunciation পাওযা যাইনি"}"</h3>
        </div>
          <div class="flex justify-evenly items-center">
          <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
        </div>
    </div>
    `
    cardSection.append(div)
   
  });
};

// ----------------------------------------- dynamicCardSection api call----------------------------------
const dynamicCardSection = async (levelId) =>{
  spinnerRemove()
   
  setTimeout ( async ()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/level/${levelId}`)
    const data = await res.json()
    displyCardSection(data.data)
  },2000)  
    
};

//----------------------------------------- displayDynamicBtnLesion----------------------------------
const displayDynamicBtnLesion = (btn) => {
    const btnLesion = document.getElementById("btn-lesion");
    btn.forEach(btn =>

    {
        const {level_no} = btn
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick = "dynamicCardSection(${level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lession -${level_no} </button>
        
        `
        btnLesion.append(div)

    });

};

dynamicBtnLesionApiCall()




