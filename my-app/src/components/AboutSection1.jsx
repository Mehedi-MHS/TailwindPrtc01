

const AboutSection1 = ()=>{

    
return(
    <div className="container w-full mx-auto mt-2 p-1 grid grid-cols-1 md:grid-cols-12 gap-2">
    <div className="schoolInfo w-full bg-white/50 rounded-xl p-7 md:col-span-8 gap-2 shadow-sm">
        <img src="/images/banner2.png" alt="" className="w-full"/>
        <span className="text-2xl sm:text-xl text-gray-700 text-justify">
<br /><b>Former Name:</b> Jamidarhat B.N. High School <br /><b>Present Name:</b> Jamidarhat Begum Nurunnahar High School <br />
EIIN: 107210 <br />Established: 1964 <br />Location: Begumganj Upazila, Noakhali, Bangladesh
<br /><span className="font-bold text-2xl text-center text-slate-500">Introduction</span> <br />
Founded in 1964, Jamidarhat Begum Nurunnahar High School has been playing a vital role in spreading the light of education in the region. Today, it stands as a well-recognized educational institution under Begumganj Upazila. Over the decades, the school has nurtured countless talented and responsible citizens who have been serving with excellence both at the national and international levels.
<br /><span className="font-bold text-2xl text-center text-slate-500">Academic & Co-Curricular Activities</span> <br />
Along with regular academic programs, the school organizes various co-curricular activities such as debate competitions, sports, cultural programs, and other creative events. These activities help foster students’ confidence, moral values, and leadership skills.
<br /><span className="font-bold text-2xl text-center text-slate-500">Contribution to Society</span> <br />
Many of the school’s alumni hold prestigious positions in government and private sectors, which reflects the institution’s reputation, pride, and contribution to the nation.
<br /><span className="font-bold text-2xl text-center text-slate-500">Mission & Vision</span> <br />

Jamidarhat Begum Nurunnahar High School is committed to providing quality education that develops knowledge, character, and humanitarian values in its students, thereby preparing them to contribute meaningfully to society and national development.</span>
    </div>
    <div className="teachersContainer md:col-span-4">
        <div className="headmaster w-full rounded-xl bg-white shadow-sm p-3 ">
           <div className="title"> Message of the Headmaster</div>
        </div>
    </div>
</div>
)
}
export default AboutSection1;