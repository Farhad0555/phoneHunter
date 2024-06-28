//console.log('HI');

const fetchApi= async(search)=>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data =await res.json();
    ViewApi(data.data);
}
const ViewApi=(datas)=>{
    const maindiv= document.getElementById('maindiv');
    maindiv.innerHTML=``;
    datas.forEach(data=>{
        const newdiv = document.createElement('div');
        newdiv.innerHTML=` 
        <div class="col">
            <div class="card">
                <img src="${data.image}" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">Phone Name:${data.phone_name}</h5>
                <p class="card-text">Deatil : ${data.slug}</p>
                </div>
                <button  onclick="modalfunction('${data.phone_name}')"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail..</button>
            </div>
        </div>
        `;
        maindiv.appendChild(newdiv); 
    })
   
}

const modalfunction =async(data)=>{
    //console.log(data);
    const url =`https://openapi.programming-hero.com/api/phones?search=${data}`;
    const res = await fetch(url);
    const datas= await res.json();
    viewModaldetail(datas.data);

}
const viewModaldetail=(data)=>{
    //console.log(data);
    const exampleModalLabel= document.getElementById('exampleModalLabel');
    const modalbody= document.getElementById('modalbody');
    exampleModalLabel.innerHTML=`
    <p>Tag title :${data[0].brand}</p> 
    `;
    modalbody.innerHTML=`
     <p>Phone Name :${data[0].phone_name}</p> 
     <p>Phone Name :${data[0].slug}</p> 
    `;

}

document.getElementById('btn-search').addEventListener('click', function(){
    const inputText = document.getElementById('inputText');
    inputSearch= inputText.value;
    fetchApi(inputSearch);
    inputText.value=``;
})
fetchApi('apple');