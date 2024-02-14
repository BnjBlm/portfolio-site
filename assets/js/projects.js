$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj =
    [
        {
            "image": "assets/images/portfolio/docker_arm.webp",
            "link": "",
            "title": "UR5 Docker",
            "demo": false,
            "technologies": ["Docker", "ROS", "UR5 Robot Arm"],
            "description": "I wrote a docker container to create a repeatable, scalable ROS-based development environment to program a UR5 robot arm.",
            "categories": ["docker"]
        },
        {
            "image": "assets/images/portfolio/docker_mobile.webp",
            "link": "",
            "title": "Mobile-robot Docker",
            "demo": false,
            "technologies": ["Docker Compose", "ROS", "Mobile Robot", "Android", "X11"],
            "description": "I wrote a docker compose file with build images that allowed development and interactive control of a mobile robot. Highlights include: emulating an android-based control application, ROS-based networking functionality, a remote \"deadman's switch\" to allow safe remote control via internet & webcam, and graphical applications via an X11 pipe.",
            "categories": ["docker", "mobile"]
        },
        {
            "image": "assets/images/portfolio/wampy-logo.png",
            "link": "https://github.com/BenBlumer/wampy",
            "title": "WAMPy",
            "demo": false,
            "technologies": ["Python", "ROS", "Barrett WAM"],
            "description": "This wrapper makes it really easy for a ROS beginner to interface with the Barrett WAM ROS package using Python.",
            "categories": ["oss_o"]
        },
        {
            "image": "assets/images/portfolio/lasercuttercontrolboard.jpg",
            "link": "",
            "title": "K40 Laser cutter rebuild",
            "demo": false,
            "technologies": ["K40 Laser Cutter", "Transistor Circuit", "Perfboard"],
            "description": "I bought a K40 laser and replaced the control board and stepper drivers. I had to build a small transistor circuit on perfboard to flip the end-stop signals from NC to NO. Later (not pictured), I replaced the tube with a true 40 watt, the power supply, and upgraded the optics.",
            "categories": ["m_f_e"]
        },
        {
            "image": "https://www.youtube.com/embed/zuq3YQe1p9A",
            "link": "",
            "title": "Early stair-measuring tool",
            "demo": true,
            "technologies": ["Raspberry Pi W", "Laser Line Projectors", "Servo Motors"],
            "description": "An early prototype I built for ShapeMeasure to allow floor installers to measure all of their stairs at once and then cut them all at once. This was powered by a Raspberry Pi W, laser line projectors, and two axis servo motors.",
            "categories": ["m_f_e"]
        },
        {
            "image": "https://www.youtube.com/embed/VVnEZHeHBng",
            "link": "",
            "title": "Robot-drawn portraits",
            "demo": true,
            "technologies": ["UR5 Robot", "Photograph to Portrait"],
            "description": "We created software to control a UR5 robot to draw a portrait from a photograph for a publicity event.",
            "categories": ["motion_planning"]
        },
        {
            "image": "https://www.youtube.com/embed/lmzwhOUM2EM",
            "link": "",
            "title": "ShapeMeasure measure and cut system",
            "demo": true,
            "technologies": ["Raspberry Pi", "LIDAR", "CNC", "Router"],
            "description": "A prototype I built for ShapeMeasure to allow flooring installers to automatically measure and cut flooring for stairs. The measuring tool is powered by a raspberry pi and a novel high-accuracy LIDAR. The CNC is powered by a raspberry pi, a few mechanical tricks, and a router.",
            "categories": ["m_f_e"]
        },
        {
            "image": "https://www.youtube.com/embed/BAhX9AzoE_4",
            "link": "",
            "title": "High-speed stereovision ball tracking",
            "demo": true,
            "technologies": ["PSEye Cameras", "Blob Colour Detection", "Cartesian Coordinates"],
            "description": "This ball-tracking uses blob colour detection at 60 fps on two PSEye cameras. The program draws a blue circle around the ball when it \"sees\" it. The white text that flashes are Cartesian coordinates for the ball.",
            "categories": ["vision"]
        },
        {
            "image": "https://www.youtube.com/embed/0kEe-8C2xec",
            "link": "",
            "title": "Coordination of two robot arms",
            "demo": true,
            "technologies": ["Two Robot Arms", "Probabilistic Framework", "Ping-Pong Ball"],
            "description": "A probabilistic framework to allow for high-precision, high-speed coordination of two robot arms. Demonstrated by serving a ping-pong ball.",
            "categories": ["motion_planning"]
        },
        {
            "image": "assets/images/portfolio/gazebopingpong.png",
            "link": "https://github.com/BenBlumer/Gazebo_WAM",
            "title": "Gazebo WAM",
            "demo": false,
            "technologies": ["Gazebo", "Barrett WAM Robot", "ROS Plugin"],
            "description": "This package includes a 3D-model of the Barrett WAM robot for the robotics simulator, Gazebo. The model can be controlled using a ROS plugin or via a list of time-stamped joint coordinates.",
            "categories": ["oss_o", "simulation"]
        },
        {
            "image": "assets/images/portfolio/mobile_robot.jpg",
            "link": "",
            "title": "Mobile robot dog",
            "demo": false,
            "technologies": ["Arduino", "Wii Nunchuck", "Firmware"],
            "description": "The robot that started it all for me! I started building this for my little sister while working in research on the Aurora Borealis -- this led me to discover that I liked building robots way more than I liked building differential equations. This robot is powered by two arduinos, controlled wirelessly using a wii nunchuck, and is powered by car-seat motors.",
            "categories": ["m_f_e", "mobile"]
        },
        {
            "image": "assets/images/portfolio/motion_planning_2.png",
            "link": "",
            "title": "Motion Planning",
            "demo": false,
            "technologies": ["Algorithm Design", "Medical Device"],
            "description": "I designed an algorithm to determine the optimal position for a novel medical device over a surgery bed and move it to that location.",
            "categories": ["motion_planning", "simulation"]
        },
        {
            "image": "assets/images/portfolio/Willow_catkin_Jojo.jpg",
            "link": "https://github.com/BenBlumer/catkin-barrett-ros-pkg",
            "title": "CATKINized Barrett ROS",
            "demo": false,
            "technologies": ["ROS Catkin", "Barrett WAM"],
            "description": "Barrett released a ROS node to control the WAM. Unfortunately, it's no longer maintained and isn't compatible with any of the newer versions of ROS that use Catkin. So, here's this! Should work with any version of ROS. It's been tested with Igloo.",
            "categories": ["oss_o"]
        },
        {
            "image": "assets/images/portfolio/RHR_Reflex_s.png",
            "link": "https://github.com/RightHandRobotics/reflex-ros-pkg/commit/65b06d153f730dc09e1ef3cf212e5bfee4484059",
            "title": "RHR Build Fix",
            "demo": false,
            "technologies": ["ROS", "RHR Reflex Gripper", "CMakeList"],
            "description": "The RHR software allows one to control the RHR Reflex gripper using ROS. This commit is a modification to the CMakeList to allow the driver to build properly.",
            "categories": ["oss_p"]
        },
        {
            "image": "assets/images/portfolio/skeltrack.png",
            "link": "https://github.com/criverc/K2Skeltrack/pull/5",
            "title": "Kinect 2 Skeleton Tracking Fix",
            "demo": false,
            "technologies": ["Kinect 2", "Skeleton Tracking", "Open-Source"],
            "description": "Skeltrack2 is open-source skeleton-tracking software for the Kinect2. This merge separates the build dependencies for the Kinect 2, allowing one to build for the Kinect 2 without requiring the libraries needed for the original Kinect.",
            "categories": ["oss_p", "vision"]
        },
        {
            "image": "assets/images/portfolio/kodak_stereo.jpg",
            "link": "https://github.com/ros-drivers/pointgrey_camera_driver/commit/643030cbf300607b8858be5ddcdf77a489330008",
            "title": "ROS Support for stereovision using Grasshopper 3 cameras",
            "demo": false,
            "technologies": ["ROS", "Grasshopper 3 Cameras", "Stereovision"],
            "description": "Adds an option to the ROS PointGrey package to set the trigger pin needed to synchronize two Grasshopper 3 cameras.",
            "categories": ["oss_p", "vision"]
        },
        {
            "image": "assets/images/portfolio/ROS_cat.png",
            "link": "https://github.com/ros-drivers/pointgrey_camera_driver/commit/643030cbf300607b8858be5ddcdf77a489330008",
            "title": "Bug fix for Gazebo-ROS",
            "demo": false,
            "technologies": ["Gazebo", "ROS", "Simulation"],
            "description": "An uninitialized data structure caused simulated robots to move through their motions as fast as possible. With this bug fix, they move at the correct speed.",
            "categories": ["oss_p", "simulation"]
        }
    ]
    
    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        ${project.demo ? 
                            `<iframe width="100%" height="auto" src="${project.image}" frameborder="0" allowfullscreen></iframe>`
                            :
                            (project.link ? 
                                `<a href="${project.link}">
                                    <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                                </a>`
                                :
                                `<img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">`
                            )
                        }
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2>${project.link ? `<a href="${project.link}">${project.title}</a>` : project.title}</h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}