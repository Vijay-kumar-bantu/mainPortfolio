import insta from "./assets/SVG/instagram.svg";
import linkedin from "./assets/SVG/linkedin.svg";
import github from "./assets/SVG/github.svg";
import arrow from "./assets/SVG/arrow.svg";
import image from "./assets/images/photo.jpg";
import skill from "./assets/SVG/skills.svg";
import Project from "./components/Project";
import data from "./assets/projects";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form";
import { contacts, resumeLink } from "./utils/constants";

function App() {
	return (
		<>
			<header className=" h-20 lg:w-4/5 mx-auto rounded-b-md py-5 px-8 bg-secondary text-monofont flex justify-between items-center">
				<h1 className="text-xl lg:hidden font-bold">VIJAY KUMAR BANTU</h1>
				<nav className=" hidden text-sm list-none w-1/2 lg:flex justify-evenly cursor-default">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contactme">Contact me</a>
					</li>
				</nav>
				<div className=" list-none flex justify-between gap-3 lg:gap-10 items-center cursor-pointer">
					<li>
						<a href={contacts.linkedin} target="_blank">
							<img src={linkedin} />
						</a>
					</li>
					<li>
						<a href={contacts.github} target="_blank">
							<img src={github} />
						</a>
					</li>
					<li>
						<a href={contacts.insta} target="_blank">
							<img src={insta} alt="" />
						</a>
					</li>
				</div>
			</header>

			<main>
				<section
					id="home"
					className="text-sm lg:text-base lg:w-4/5 py-5 px-8 mx-auto flex flex-col-reverse items-center lg:h-[90vh] lg:flex-row lg:justify-between "
				>
					<div className="lg:w-1/2 py-5 px-8 ml-5 flex flex-col gap-5">
						<h1 className=" font-secondary text-2xl lg:text-5xl font-extrabold text-white">
							VIJAY KUMAR BANTU
						</h1>
						<p className="text-monofont ">
							I'm a Full stack Developer with a passion for crafting elegant
							digital solutions. With expertise in both front-end and back-end
							technologies, I specialize in creating user-centric interfaces and
							scalable server-side applications.
						</p>
						<div>
							<p className="bg-buttoncolor w-fit p-5 font-extrabold text-white rounded-md flex items-center gap-2 cursor-pointer">
								<p>
									<a href={resumeLink} download>
										Resume Download
									</a>
								</p>
								<p>
									<img src={arrow} />
								</p>
							</p>
						</div>
					</div>
					<div className=" w-1/3 lg:h-[25rem] lg:w-[25rem] rounded-sm lg:rounded-full overflow-hidden">
						<img src={image} className="w-full object-fill" />
					</div>
				</section>

				<section
					id="about"
					className="bg-white text-sm lg:text-base lg:h-lvh grid place-items-center "
				>
					<div className="p-5 lg:p-0 flex flex-col gap-10 justify-center lg:max-w-[45vw] text-center">
						<h1 className="font-secondary font-extrabold text-2xl lg:text-4xl">
							About
						</h1>
						<p>
							Currently residing in the vibrant city of Hyderabad. In 2021, I
							proudly earned my Bachelor's degree in Computer Science, and since
							then, I've been shaping my career as a dedicated Junior Full stack
							developer at Tata Consultancy Service(TCS).
						</p>
						<p>
							My interests are web development, app development, and the
							intriguing realms of AI and machine learning.
						</p>
						<p>
							Beyond the realm of technology, I'm a multifaceted individual with
							diverse interests. I find joy in immersing myself in the world of
							movies, savoring the melodies of songs, and exploring the depths
							of knowledge through the pages of books. With a passion for both
							technology and life's simple pleasures, I strive to strike a
							harmonious balance between the digital and analog worlds.
						</p>
					</div>
				</section>

				<section
					id="skills"
					className="h-fit bg-primary p-10 lg:p-20 flex flex-col items-center gap-6"
				>
					<h1 className="text-white font-secondary font-extrabold text-2xl lg:text-4xl text-center">
						Skills
					</h1>
					<div>
						<img src={skill} alt="skill set" />
					</div>
				</section>

				<section
					id="projects"
					className="bg-white grid place-items-center text-sm lg:text-base"
				>
					<div className="lg:w-2/3 p-5 lg:py-10 flex flex-col items-center gap-5">
						<h1 className=" text-2xl lg:text-4xl font-secondary font-extrabold">
							Projects
						</h1>
						<p className="text-center lg:max-w-[45vw]">
							Below are the projects where majorly deal with the web
							development. Mostly, I have used React js for frontend and Node
							js, Express js & MongoDB for Backend.
						</p>
						<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
							{data.map((project) => {
								return <Project project={project} />;
							})}
						</div>
					</div>
				</section>

				<section
					id="contactme"
					className=" grid place-items-center text-sm lg:text-base p-5 lg:p-0"
				>
					<div className="lg:w-2/3 py-10 flex flex-col items-center gap-5">
						<h1 className="text-white font-secondary font-extrabold text-3xl lg:text-4xl text-center">
							Contact me
						</h1>
						<p className="text-center text-monofont lg:max-w-[45vw]">
							Please contact through social media platforms or please use the
							message sending feature below.You can send me a message for hiring
							purposes or for any open projects.
						</p>
						<div className="w-4/5 lg:w-2/5">
							<Form />
						</div>
					</div>
				</section>
			</main>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
}

export default App;
