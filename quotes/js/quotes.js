const btns = document.querySelectorAll(".card-link");
const title = document.getElementById("title");
const img = document.querySelector(".card-img-top");
const text = document.querySelector(".card-text");
const chars = [
    {
        id:1,
        name:"usopp", 
        img:"./media/d8f2a160f405ff27c5408cdd27d742d7.jpg",
        bio:"Sniper King ve 'Tanrı' Usopp takma adlarıyla da bilinen Usopp, Eiichiro Oda tarafından yaratılan One Piece serisindeki kurgusal bir karakterdir. Hasır Şapka Korsanları'nın keskin nişancısı olarak görev yapmaktadır."
    },
    {
        id:2,
        name:"nami",
        img:"./media/images.jpg",
        bio:"'Kedi Hırsızı' Nami olarak da bilinen Nami, Eiichiro Oda tarafından yaratılan One Piece serisindeki kurgusal bir karakterdir. Oda'nın önceki mangası Romance Dawn'dan iki karakter olan Ann ve Silk'e dayanıyor. Kartografik, meteorolojik ve seyir becerilerine sahip bir hırsız ve yankesici olarak tanıtıldı."
    },
    {
        id:3,
        name:"zoro", 
        img:"./media/roronoa-zoro-kupe-cosplay-650x650.png",
        bio:"Roronoa Zoro, bir animesi olan One Piece'te kurgusal bir karakter. Hasır Şapka Korsanları'na katılan ilk kişidir. Monkey D. Luffy ve Sanji'yle beraber tayfanın en güçlü üç dövüşçüsünden biri olan Zoro, üç kılıç tekniği kullanan yetenekli bir kılıç ustadır."
    },
    {
        id:4,
        name:"sanji", 
        img:"./media/sanji-one-piece.webp",
        bio:"İngilizceden çevrilmiştir-Vinsmoke Sanji olarak doğan ve 'Kara Bacak' Sanji olarak da bilinen Sanji, Eiichiro Oda tarafından yaratılan One Piece serisindeki kurgusal bir karakterdir."
    },
    {
        id:5,
        name:"chopper", 
        img:"./media/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.webp",
        bio:"'Pamuk Şeker Aşığı' olarak da bilinen Tony Tony Chopper, Eiichiro Oda tarafından yaratılan One Piece manga serisindeki kurgusal bir karakterdir. Katılan altıncı üye ve Hasır Şapka Korsanları'nın doktorudur. Chopper, sık sık resmi ürünlerde yer alır ve serinin maskotu olarak hizmet eder."
    },
    {
        id:6,
        name:"luffy", 
        img:"./media/Untitled.png",
        bio:"Monkey D. Luffy Anime ve Manga serisi One Piece'in baş karakteri olan kurgusal bir kahramandır. Devrimci Monkey D. Dragon'un oğlu ve denizcilerin kahramanı Monkey D. Garp'ın torunudur. Garp, Luffy'yi büyütemediği için Dadan adında bir dağ haydutuna vermiştir. Luffy dağ haydutları, Portgas D."
    }

]


let click = 0;
window.addEventListener("DOMContentLoaded" , ()=>{
    title.textContent = chars[click].name;
    img.src = chars[click].img;
    text.textContent = chars[click].bio;
})

function showPerson(cl){
    title.textContent = chars[cl].name;
    img.src = chars[cl].img;
    text.textContent = chars[cl].bio;
}

showQuotes();
function showQuotes(){
    btns.forEach(btn=>{
        btn.addEventListener("click" , ()=>{
            if(btn.id == "next"){
                click++;
                if(click>chars.length-1){
                    click = 0;
                }
                showPerson(click);
                console.log(click)
            }
            else{
                click--;
                if(click<0){
                    click = chars.length-1;
                }
                showPerson(click);
            }
        })
    })
}