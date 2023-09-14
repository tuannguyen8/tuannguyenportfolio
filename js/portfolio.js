let aboutMe = {
	para1: `My name is Tuan Nguyen, and I'm a computer science major who loves to create things on the internet. I have a particular affinity for frontend development, but I'm constantly working to upgrade my skills and become a full-stack engineer. I believe that the more I learn about backend development, the better equipped I'll be to bring my ideas to life.`,
	para2: `When I'm not coding, I enjoy exploring new technologies and experimenting with different tools to create unique user experiences. I'm passionate about web design and believe that the best websites are those that are both visually appealing and easy to use.`,
	para3: `In my free time, I enjoy reading tech blogs and following the latest trends in web development. I believe that staying up to date with the latest developments is essential for staying ahead in this constantly evolving field`,
	para4: `Here are a few technologies I've been working with recently: JavaScript, HTML, CSS/SCSS, NodeJs, jQuery, MongoDB, MySQL, Express.js, Java, C++`,
};
let workingExp = [
	
	{
        id: 5555,
		company: 'Seminaut-Inc',
		position: 'Software Engineering',
		timeline: '02/2023 - Current',
		des: `In the software engineering department, we use Python as our primary language for
		 backend development, and JavaScript with ReactJS for front-end development. As a
		  software engineer in this department, I am part of a dynamic team of 10 individuals
		   who meet once a week on Discord to discuss ongoing projects and tasks. I am paired 
		   with another person, and our tasks are assigned through the ClickUp project 
		   management tool. I work closely with my partner to complete assigned tasks, 
		   ensuring that codebase standards are followed in accordance with Seminaut's guidelines. 
		   Additionally, I have the opportunity to collaborate with other team members and share 
		   knowledge and expertise. This role requires strong technical skills, as well as the 
		   ability to communicate effectively and work collaboratively with others.`,
	},
	{
		id: 7777,
		company: 'Columbia Gorge Inn, Cascasde Locks, OR, USA',
		position: 'Manager Assistant',
		timeline: '04/2023 - Current',
		des: `Assisted in managing day-to-day operations of the motel, including check-ins, check-outs, and guest inquiries.
Coordinated with housekeeping and maintenance teams to ensure rooms were clean, well-maintained, and ready for guest arrivals.
Accurately processed reservations, billing, and payments, maintaining financial records and adhering to cash-handling procedures.
Acted as a point of contact for guest requests and concerns, resolving issues promptly and courteously.
Collaborated with the manager to enforce motel policies and maintain compliance with industry regulations.`,
	},

	{
        id: 6666,
		company: 'ATAX',
		position: 'Taxpreparer',
		timeline: '01/2023 - 04/2023',
		des: `The duties of a tax preparer include gathering and organizing financial information,
		 preparing and filing accurate tax returns, and addressing clients' tax-related concerns.
		  Compliance with tax laws and regulations, identification of opportunities for tax
		   savings, and provision of exceptional customer service are also key responsibilities. 
		   The main objective of a tax preparer is to offer efficient and effective tax 
		   preparation services that cater to clients' requirements.`,
	},
	{
        id: 2222,
		company: 'Thien Hong Restaurant',
		position: 'Helper in Kitchen',
		timeline: '04/2014 - 04/2022',
		des: `Assisting the chefs and other kitchen staff with food preparation. Cleaning and 
		sanitizing kitchen equipment, utensils, and work areas. Stocking and organizing ingredients
		 and supplies. Running errands as needed such as fetching items from storage. Helping to
		  keep the kitchen organized and running smoothly. Assisting with basic food preparation 
		  tasks such as washing vegetables, cutting meats and making sauces. Helping to 
		  maintain a safe and clean working environment. Following food safety guidelines and 
		  regulations.`,
	},
	{
        id: 4444,
		company: 'Portland Open Data',
		position: 'Frontend Developer',
		timeline: '06/2021 - 12/2022',
		des: `Working as a member of a six-person team to create a web portal that supports validating 
		submitted datasets in order to ensure they follow a standard format It returns a report of errors 
		if any are present and sends a success message if it’s successful. My responsibilities in this 
		project are as follows: Works as a front-end developer. Designing and developing user-facing web 
		and mobile applications. Collaborating with other team members, back-end developers, and the team 
		leader to create visually appealing and user-friendly web pages and applications. Writing clean and 
		efficient code using languages such as HTML, CSS, and JavaScript building reusable code for future 
		use. Troubleshooting and debugging issues as they arise.`,
	},
	{
        id: 3333,
		company: 'Uber',
		position: 'Uber Driver',
		timeline: '10/2018 - 09/2019',
		des: `Providing safe and reliable transportation to passengers using the Uber app. Picking
		 up food orders from participating restaurants and delivering them to customers. Following
		  the GPS instructions and navigating to the requested pickup and drop-off locations. 
		  Communicating with passengers to ensure a pleasant and efficient ride experience or to 
		  ensure a smooth delivery experience. Following all traffic laws and regulations. 
		  Maintaining the cleanliness and safety of the vehicle.`,
	},
	{
        id: 1111,
		company: 'Mary Harvest Fresh Food',
		position: 'Labor worker',
		timeline: '11/2013 - 04/2014',
		des: `Preparing and packaging fresh food items such as fruits and vegetables. Operating
		 machinery and equipment used in the production process. Cleaning and sanitizing production 
		 areas and equipment.`,
	},
	
];
let projects = [
	{
		name: "Validates Submitted Datasets",
		id: 1001,
		projectType: "Group Project - Portland Open Data",
		stacks: "Python, JavaScript, CSS/SCSS, HTML ",
		position: "Software Developer",
		timeline: "Jun 2021 - Dec 2021",
		link: `https://capstoneteamc.herokuapp.com/`,
		img: [
			`./img/validate-data-1.PNG`,
			`./img/validate-data-2.PNG`,
			`./img/validate-data-3.PNG`,
		],
		description: `This is the final group project of Capstone courses. Creating a Web Portal that supports validating
submitted datasets in order to ensure they follow a standard format. Returning a report of errors, if some
are present; sends a success message if it's successful`,
	},
	{
		name: "Commercial Website",
		id: 1002,
		projectType: "Personal Project",
		stacks: "Python, JavaScript, CSS/SCSS, HTML ",
		position: "Frontend Developer",
		timeline: "Oct 2021 - Current",
		link: `https://tuannguyen8.github.io/frontend_project_Riode_website/`,
		img: [
			`./img/riode-web.PNG`,
			`./img/riode-web2.PNG`,
			`./img/riode-web3.PNG`,
		],
		description: `This is my personal frontend commercial web project. Using HTML, SCSS, JavaScript, jQuery and some
libraries to create a commercial website.`
	},
	{
		name: "Currency Converter",
		id: 1003,
		projectType: "Group Project - Frontend Course Final Project At PSU",
		stacks: "Python, JavaScript, CSS/SCSS, HTML ",
		position: "Frontend Developer",
		timeline: "Sep 2021 - Dec 2021",
		link: `https://tuannguyen8.github.io/frontend-currencies-exchange/`,
		img: [
			`./img/currency-exchange-1.PNG`,
			`./img/currency-exchange-2.PNG`,
			`./img/currency-exchange-3.PNG`,
		],
		description: `This is the final project of Frontend courses. Building a dashboard application that allows the user to
convert between currencies, common cryptos, and the application also allows the users to keep track of
the top change in a week, month.`
	},
	{
		name: "Book Application",
		id: 1004,
		projectType: "Personal Project",
		stacks: "Python, JavaScript, CSS/SCSS, HTML ",
		position: "Backend Developer",
		timeline: "Jun 2021 - Dec 2021",
		link: `https://github.com/tuannguyen8/bookapp`,
		img: [
			`./img/book-app-1.PNG`,
			`./img/book-app-2.PNG`,
			`./img/book-app-2.PNG`,
		],
		description: `This is my personal back-end bookapp application project.
		 Using MongoDB, Express, NodeJS, and some libraries to create the back-end for the app that has authentication features (login, register, change passwords, forgot password), and allows the user to create books, get books, delete books,...`
	},
	{
		name: "Word Jumbler Game",
		id: 1005,
		projectType: "Group Project - Full Stack Course Project At PSU",
		stacks: "Python, JavaScript, CSS/SCSS, HTML ",
		position: "Full-stack Developer",
		timeline: "Sep 2021 - Dec 2021",
		link: `https://jumble-words-mini-game.herokuapp.com/`,
		img: [
			`./img/word-jumbler-1.PNG`,
			`./img/word-jumbler.PNG`,
			`./img/word-jumbler.PNG`,
		],
		description: `This is the final group project of Capstone courses. Creating a Web Portal that supports validating
submitted datasets in order to ensure they follow a standard format. Returning a report of errors, if some
are present; sends a success message if it's successful`
	},
	{
		name: "Validates Submitted Datasets",
		id: 1006,
		projectType: "Group Project - Machine Learning Final Project At PSU",
		stacks: "Python, JavaScript, CSS/SCSS, HTML ",
		position: "Frontend Developer",
		timeline: "Sep 2021 - Dec 2021",
		link: `https://github.com/PSUOpenDev/FinalProjectMachineLearning`,
		img: [
			`./img/validate-data-1.PNG`,
			`./img/validate-data-2.PNG`,
			`./img/validate-data-3.PNG`,
		],
		description: `This is the final group project of Capstone courses. Creating a Web Portal that supports validating
submitted datasets in order to ensure they follow a standard format. Returning a report of errors, if some
are present; sends a success message if it's successful`
	},
	{
		name: "GOMOKU-AI",
		id: 1007,
		projectType: "Group Project - Rust Programming Final Project At PSU",
		stacks: "Python, JavaScript, CSS/SCSS, HTML ",
		position: "Frontend Developer",
		timeline: "Sep 2021 - Dec 2021",
		link: `https://github.com/trilq142/Project-CS410P-Rust-Spring2021/tree/main/gomoku_ai`,
		img: [
			`./img/gomoku.PNG`,
			`./img/gomoku1.PNG`,
			`./img/gomoku1.PNG`,
		],
		description: `This is the final group project of Capstone courses. Creating a Web Portal that supports validating
submitted datasets in order to ensure they follow a standard format. Returning a report of errors, if some
are present; sends a success message if it's successful`
	}

];
let contact = [
	{
		name: "Tuan Vu Nguyen",
		number: "503-841-8844",
		email: "nguyenvutuan1@gmail.com",
		github: "https://github.com/tuannguyen8",
		linkedIn: `https://www.linkedin.com/in/tuan-nguyen-158533227/`,
		faceBook: `https://www.facebook.com/shjn.raesoo`,
		youTube: `https://www.youtube.com/channel/UCWoh7_kbBiBZiJ8cbnFIxPQ/channels`,
		directme: `https://direct.me/tuannguyen`,
		instagram: `https://www.instagram.com/akdnfueidhakxn/`,
	}
]
/////////////////////////////////////////////////////
//To-top button appear after scrolling
$(window).scroll(function () {
	const position = $(window).scrollTop();
	const viewportWidth = $(window).width();
	if (position > 70 && viewportWidth > 800) {
		$('.totop').fadeIn().css({
			display: 'flex',
		});
	} else {
		$('.totop').fadeOut();
	}
});

$('.totop').click(function (e) {
	e.preventDefault();
	$('html, body').animate(
		{
			scrollTop: 0,
		},
		1000,
		'easeOutQuint'
	);
});




////////////////////////////////////////////////////////////////////////////////
//About me
const renderAboutMe = (aboutMe) => {
	//console.log(aboutMe.des);
	for ([key, val] of Object.entries(aboutMe)) {
		if (key === 'para4') {
			//console.log(key);
			let splittedVal = val.split(':');
			//console.log(splittedVal[0]);
			//console.log(splittedVal[1]);
			let arrSkills = splittedVal[1].split(',');
			arrSkills.forEach((skill)=>{
			    //console.log(skill)
                $('.ul-skills').append(`
			        <li> ${skill}</li>
			    `)
			})

			$('.passage-content').append(`
                <p>${splittedVal[0]}: </p>
            `);
		} else {
			$('.passage-content').append(`
                <p>${val} </p>
            `);
		}
	}
};

///////////////////////////////////////////////////////////////////////////////
//reset experience
const resetJobExperience = () =>{
    $('.text-exp').empty();
};

//render my projects
let renderMyProjects = (projects) =>{
	projects.forEach((project)=>{
		$('.project-box').append(`
			<div class="a-project" id = ${project.id}>
				<ul>
					<li> 
						<span class="project-span-st">Project: </span> 
						<span class="project-span-nd">${project.name}</span> </li>
					<li>
						<span class="project-span-st">Description: </span>
						<span class="project-span-nd">${project.description}
						</span>
					</li>
					<li>
						<span class="project-span-st">Tech: </span>
						<span class="project-span-nd">${project.stacks}</span>
					</li>
				</ul>
			
			</div>
		`)
	})
} 


//render job time line button
const renderJobTimelineBtn = (workingExp) => {
	workingExp.forEach((job) => {
		$('.div-btn-exp').append(`
            <button id = ${job.id} class="btn-exp">
				${job.timeline}
			</button>
        `);
		
		//make default the first button have active class
        $('.div-btn-exp .btn-exp:first-child').addClass('active');
	});
};



//display content of working exp after click the job btn-exp button.
$(document).on("click", ".btn-exp", function(e){

	//remove all "active" classes in many "btn-exp" buttons.
	$('.btn-exp').removeClass('active');

    //add the active class to the button that is clicked
	e.target.classList.add("active");

	//remove all current content in the job exp div
    resetJobExperience();

	//add new content for the job exp div
    workingExp.forEach((job) => {
        //console.log(job.id);
        if(e.target.id === job.id.toString()){
            //console.log("matching")
            $('.change-exp-content').append(`
                <div class="exp-company">
                    <a class="heading-company">Company Name: </a> <a class="company-info">${job.company}</a>
                </div>
                <div class="exp-position">
                    <a class="heading-position">Position: </a> <a class="position-info">${job.position}</a>
                </div>
                <div class="exp-des">
                    <a class="heading-description">Description: </a> <a class="des-info">${job.des}</a>
                </div>
            `);
        }
    })
});


/////////////////////////////////////////////////////////////////////////
//Projects 
//click a project to get more info
$(document).on("click", ".a-project", function(e){
	//console.log(e.target.closest(".a-project"));
	//console.log( e.target.closest(".a-project").id)
	projects.forEach((project) => {
        
        if(e.target.closest(".a-project").id === project.id.toString()){

			$('.body-class').append(`
				<div class="more-info">
					<div class="modal-content">
						<ul>
							<li> 
								<span class="project-span-st">Project: </span> 
								<span class="project-span-nd"> ${project.name}</span> 
							</li>
							<li>
								<span class="project-span-st">Project Type: </span>
								<span class="project-span-nd"> ${project.projectType}</span>
							</li>
							<li>
								<span class="project-span-st">Description: </span>
								<span class="project-span-nd"> ${project.description}</span>
							</li>
							<li>
								<span class="project-span-st">Tech: </span>
								<span class="project-span-nd">${project.stacks}</span>
							</li>
							<li>
								<span class="project-span-st">Deployment link: </span>
								<span class="project-span-nd"> ${project.link}</span>
							</li>
				
						</ul>

						<div class="project-images">
							<div class="slide owl-carousel owl-theme image-div">
								<div id="${project.id}" class="item">
									<img style="height: 150px; width: 150px" src="${project.img[0]}" alt="">
								
									<img style="height: 150px; width: 150px" src="${project.img[1]}" alt="">
								
									<img style="height: 150px; width: 150px" src="${project.img[2]}" alt="">
								</div>
							</div>
									
						</div>
						<div class="remove-modal">
							<i class="fas fa-times "></i>
						</div>
					</div>
					
				</div>
			`)
        }
    })
	
})

//click group of images to see each of picture.
$(document).click(function(e){
	let currentProjectID = e.target.closest(".item");
	let currImgArray;
	let count = 0;
	let i = 0;
	if(e.target.closest(".item")){
		console.log(e.target.closest(".item").id);
		projects.forEach((project) => {
			if(project.id.toString() === e.target.closest(".item").id ){
				
				currImgArray = project.img;
				//console.log(currImgArray);
				$('.body-class').append(`
				
				<div class="image-details">
					<div class="image-content">
						<div class="img-group">
							<div id="to-left" class=" nav-img nav-img-1">
								<i class="fa-solid fa-chevron-left"></i>
							</div>
							<div class="sing-image">	
								<img class="img-control" src="${currImgArray[i]}" alt="">
								<i class ="imgCount"> 1/${currImgArray.length} </i>

							</div>
							<div id="to-right" class=" nav-img nav-img-2">
								<i class="fa-solid fa-chevron-right"></i>
							</div>
						</div>
						
						<div class="remove-img">
							<i class="fas fa-times "></i>
						</div>
					</div>
				</div>
				
				
				`)

				//////////////////////////
				//click navigate to another image
				$(document).click(function(e){	
					let maxNum = currImgArray.length;
					if(e.target.closest(".nav-img").id =="to-right"){
						if( count < maxNum - 1){							
							$(".img-control").remove();
							$(".imgCount").remove();
							count++;
							$(".sing-image").append(`
								<img class="img-control" src="${currImgArray[count]}" alt="">
								<i class ="imgCount"> ${count+1}/${maxNum} </i>
							`)
						}else if(count === maxNum - 1){	
							$(".img-control").remove();
							$(".imgCount").remove();
							count = 0;
							$(".sing-image").append(`
								<img class="img-control" src="${currImgArray[count]}" alt="">
								<i class ="imgCount"> ${count+1}/${maxNum} </i>
							`)
						}
					}
					else if(e.target.closest(".nav-img").id =="to-left"){
						if( count <= maxNum - 1 && count > 0){
							$(".img-control").remove();
							$(".imgCount").remove();
							
							count--;
							$(".sing-image").append(`
								<img class="img-control" src="${currImgArray[count]}" alt="">
								<i class ="imgCount"> ${count+1}/${maxNum} </i>
							`)
						}else{	
							$(".img-control").remove();
							$(".imgCount").remove();
							
							count = maxNum - 1;
							$(".sing-image").append(`
								<img class="img-control" src="${currImgArray[count]}" alt="">
								<i class ="imgCount"> ${count+1}/${maxNum} </i>
							`)
						
						}
					}
				})
				/////////////////////////////////////////
			}
		})
	}

	

})

//remove modal
$(document).click(function (e) { 
    if(e.target.closest(".remove-modal")){
        $(".more-info").fadeOut();
    }
});

//remove image-details
$(document).click(function (e) { 
    //console.log(e.target.closest(".remove-modal"))
    if(e.target.closest(".remove-img")){
		//alert("hello");
        $(".image-details").fadeOut();
		//$(".more-content").remove();
    }
});
$(document).on("mouseleave", ".hamburger", function(e){
	$(".hamburger-append").remove();
	$(".hamburger-icon").removeClass("active");
})
$(document).on("mouseenter", ".hamburger", function(e){
	var container = $('.hamburger-icon');
	console.log(container.hasClass("hamburger-icon"));
	if(container.hasClass("active")){
				
		$(".hamburger-append").remove();
		$(".hamburger-icon").removeClass("active");
		
	}else{
		$('.hamburger-icon').append(`
			<ul class="hamburger-append">
				<li><a class=" hover" href="#about"> About </a></li>
				<li><a class=" hover" href="#experience"> Experience </a></li>
				<li><a class=" hover" href="#projects"> Projects </a></li>
				<li><a class=" hover" href="#contact"> Contact </a></li>
			</ul>
			
		`)
		$(".hamburger-icon").addClass("active");
		
	}
	
	

})

/////////////////////////////////////////////////////////////////////
//Contact
//the guess send email to nguyenvutuan1@gmail.com
function sendMail(){
    // console.log("hello sendMail")
    var tempParams = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
		subject:document.getElementById("subject").value,
    };
	console.log("my: ", tempParams.message.trim());
	if(tempParams.message.trim() === ""){
		alert("Please enter the message!")

	}else{
		
		emailjs.send("service_d2azh6f", "template_4swfkhu", tempParams)
		.then(function(res){
			//console.log("success", res.status)
			alert("Sent successfully!")
			res=>{
				
				console.log(res);
				console.log("success", res.status)
				

			}
		})
		.catch((err) => console.log(err))
	}
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("message").value = "";
	document.getElementById("subject").value = "";
	
    
}


renderAboutMe(aboutMe);
renderJobTimelineBtn(workingExp);
renderMyProjects(projects);
