import projects from "../data/projects"


export default function Projects() {
    return(
        <div className="mx-[140px] my-[120px] font-[Chakra_Petch]">
            <h1 className="text-[#C6C6C6] text-[64px] mb-[56px]">Projects</h1>
         <div className="grid grid-cols-2  text-left gap-[96px]">
            {projects.map((project) => (
                <div className="p-[20px] border border-solid border-[#4DBB54] rounded-[14px] border-[2px] flex flex-col gap-[12px] hover:scale-[105%] transition duration-300 ease-in-out" key={project.id}>
                    <img className="rounded-[8px] border max-h-[200px] w-full mb-[4px]" src={project.picture} alt={`Project: ${project.name}`} />
                    <h2 className="text-[#C6C6C6] text-[36px]">{project.name}</h2>
                    <p className="text-[#C6C6C6] font-[Red_Hat_Mono] text-[16px] break-all">
                        {project.description}
                    </p>
                    <span className="text-[16px] mt-[12px] text-[#C6C6C6] font-[Red_Hat_Mono] ">{project.technologies.map((stack, index) => (
                        <span key={index} className="mr-[16px] hover:text-[#F5F5F5] transition duration-300 cursor-pointer border hover:border-[#4DBB54] px-[4px] py-[2px] rounded-[4px]">{stack}</span>
                    ))}</span>

                    <a className="text-[16px] text-[#C6C6C6] font-[Red_Hat_Mono] no-underline hover:underline hover:underline-[#F5F5F5] hover:underline-offset-[6px] hover:text-[#F5F5F5] transition duration-300 cursor-pointer mt-[12px]" href={project.link?.[0]} target="_blank" rel="noopener noreferrer">{project.link?.[1]}</a>
                </div>
            )
            )}
        </div>
        </div>
    )
    
}