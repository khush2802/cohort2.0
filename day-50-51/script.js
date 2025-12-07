const instaUsers = [
     {
       username: "travel_with_aarav",
       isFollowed: true,
       isLiked: false,
       caption: "Chasing sunsets in Manali ✨🏔️",
       shareCount: 112,
       commentCount: 48,
       likeCount: 2310,
       video: "./reels/1.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
     },
     {
       username: "fitness_rhea",
       isFollowed: false,
       isLiked: true,
       caption: "No shortcuts, only hard work 💪🔥",
       shareCount: 89,
       commentCount: 67,
       likeCount: 3450,
       video: "./reels/12.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
     },
     {
       username: "foodie_krish",
       isFollowed: true,
       isLiked: true,
       caption: "Paneer tikka = happiness 🧡😋",
       shareCount: 56,
       commentCount: 34,
       likeCount: 1980,
       video: "./reels/3.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
     },
     {
       username: "tech_diary",
       isFollowed: false,
       isLiked: false,
       caption: "Trying the new AI-powered editor 🚀🧠",
       shareCount: 72,
       commentCount: 18,
       likeCount: 980,
       video: "./reels/4.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
     },
     {
       username: "artist_meera",
       isFollowed: false,
       isLiked: true,
       caption: "Watercolor vibes 🌧️🎨",
       shareCount: 44,
       commentCount: 29,
       likeCount: 1560,
       video: "./reels/5.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
     },
     {
       username: "gaming_with_adi",
       isFollowed: true,
       isLiked: true,
       caption: "New montage dropping soon 🎮🔥",
       shareCount: 102,
       commentCount: 53,
       likeCount: 4100,
       video: "./reels/6.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
     },
     {
       username: "lifestyle_by_tanya",
       isFollowed: true,
       isLiked: false,
       caption: "Morning rituals ☕✨",
       shareCount: 35,
       commentCount: 21,
       likeCount: 1250,
       video: "./reels/7.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
     },
     {
       username: "coding_arjun",
       isFollowed: false,
       isLiked: true,
       caption: "Debugging = modern meditation 😂💻",
       shareCount: 19,
       commentCount: 15,
       likeCount: 860,
       video: "./reels/8.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
     },
     {
       username: "wander_girl_sana",
       isFollowed: true,
       isLiked: true,
       caption: "Next destination? Guess! 🌍✈️",
       shareCount: 128,
       commentCount: 72,
       likeCount: 4990,
       video: "./reels/9.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
     },
     {
       username: "street_style_rahul",
       isFollowed: false,
       isLiked: true,
       caption: "New drip today 🧢✨",
       shareCount: 67,
       commentCount: 39,
       likeCount: 2180,
       video: "./reels/10.mp4",
       userProfilePhoto: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
     }
   ];



   function addData(){
    let sum = '';
   instaUsers.forEach(function(e,idx){
     sum = sum + ` <div class="reel">

     <video autoplay loop muted src="${e.video}"></video>

     <div class="bottom">
         <div class="user">
          <img src="${e.userProfilePhoto}" alt="">
          <h4>${e.username}</h4>
          <button id=${idx} class="follow">${e.isFollowed?"following":"follow"}</button>
         </div>

         <h4>${e.caption}</h4>
     </div>

     <div class="right">
          <div id=${idx} class="like">
               <h4 class="like-icon">${e.isLiked?'<i class="ri-heart-fill love"></i>':'<i class="ri-heart-line">'}</i></h4>
               <h6>${e.likeCount}</h6>
          </div>
          <div class="comment">
               <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
               <h6>${e.commentCount}</h6>
          </div>
          <div class="share">
               <h4 class="share-icon"><i class="ri-telegram-2-line"></i></h4>
               <h6>${e.shareCount}</h6>
          </div>
          <div class="more">
               <h4 class="more-icon"><i class="ri-more-2-line"></i></h4>
          </div>
     </div>
</div>`;
   })

   var allReels = document.querySelector(".all-reels");
     allReels.innerHTML = sum;
   
   };

   addData();

   let allReels = document.querySelector(".all-reels");

    allReels.addEventListener("click",function(dets){
      if(!instaUsers[dets.target.id].isLiked){
        instaUsers[dets.target.id].likeCount += 1;
        instaUsers[dets.target.id].isLiked = true;
        // instaUsers[dets.target.id].likeCunt++;
      }else{
        instaUsers[dets.target.id].likeCount -= 1;
        instaUsers[dets.target.id].isLiked = false;

      }
      addData();
    });