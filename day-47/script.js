const people = [
     {
       name: "Aarav Sharma",
       description: "Full-stack developer who loves building scalable web applications.",
       tags: ["JavaScript", "React", "Node.js"],
       profession: "Software Developer",
       image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
     },
     {
       name: "Priya Mehta",
       description: "Creative UI/UX specialist focusing on intuitive digital experiences.",
       tags: ["UI/UX", "Figma", "Prototyping"],
       profession: "UI/UX Designer",
       image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
     },
     {
       name: "Rohan Verma",
       description: "AI engineer passionate about machine learning and automation.",
       tags: ["Python", "TensorFlow", "ML"],
       profession: "AI/ML Engineer",
       image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
     },
     {
       name: "Sara Khan",
       description: "Cloud architect designing modern, reliable cloud systems.",
       tags: ["AWS", "Docker", "Kubernetes"],
       profession: "Cloud Architect",
       image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
     },
     {
       name: "Vikram Singh",
       description: "Backend engineer who enjoys crafting robust APIs.",
       tags: ["Node.js", "Express", "MongoDB"],
       profession: "Backend Developer",
       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
     },
     {
       name: "Ananya Gupta",
       description: "Data analyst turning raw data into actionable insights.",
       tags: ["SQL", "PowerBI", "Excel"],
       profession: "Data Analyst",
       image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
     },
     {
       name: "Kabir Malhotra",
       description: "Cybersecurity enthusiast ensuring systems stay protected.",
       tags: ["Ethical Hacking", "Networking", "Security Tools"],
       profession: "Cybersecurity Engineer",
       image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9"
     },
     {
       name: "Meera Iyer",
       description: "Graphics designer blending creativity with visual storytelling.",
       tags: ["Photoshop", "Illustrator", "Branding"],
       profession: "Graphic Designer",
       image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
     },
     {
       name: "Aditya Patel",
       description: "DevOps engineer automating workflows and deployments.",
       tags: ["CI/CD", "Linux", "GitHub Actions"],
       profession: "DevOps Engineer",
       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
     },
     {
       name: "Nisha Roy",
       description: "Mobile app developer crafting smooth user experiences.",
       tags: ["React Native", "Android", "iOS"],
       profession: "Mobile Developer",
       image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
     }
   ];
   
let sum = " ";

people.forEach((elem)=>{
     // console.log("Hello World");
     sum+=`<div class="card">
     <img src="${elem.image}" alt="Profile Image">
     <h2>${elem.name}</h2>
     <h3>${elem.profession}</h3>
     <p>${elem.description}</p>
</div>`
});

let main = document.querySelector("main");
main.innerHTML = sum;