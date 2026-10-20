import React, { useState, useEffect } from 'react';
import {
    User, Target, Wrench, GraduationCap, Briefcase,
    FolderGit2, Mail, Phone, MapPin, ExternalLink,
    LinkIcon, ChevronRight, Menu, X, ArrowUp, ArrowRight, ArrowLeft
} from 'lucide-react';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons'

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('about');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [eduPage, setEduPage] = useState(0);

    const navItems = [
        { id: 'about', label: 'Personal' },
        { id: 'objective', label: 'Objective' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Work Experience' },
        { id: 'projects', label: 'Projects' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setEduPage((prevPage) => (prevPage === 0 ? 1 : 0));
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            navItems.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(item.id);
                    }
                }
            });

            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-black selection:text-white">

            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div
                        onClick={() => scrollToSection('about')}
                        className="font-bold text-lg tracking-tighter cursor-pointer flex items-center gap-2"
                    >
                        <span className="w-3 h-3 bg-black inline-block"></span>
                        PORTFOLIO<span className="text-zinc-400">.dev</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${activeSection === item.id
                                    ? 'bg-black text-white shadow-sm'
                                    : 'text-zinc-600 hover:text-black hover:bg-zinc-100'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-zinc-700 hover:text-black"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md ${activeSection === item.id
                                    ? 'bg-black text-white'
                                    : 'text-zinc-600 hover:bg-zinc-100'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </header>

            <main className="pt-16">

                <section id="about" className="py-24 border-b border-zinc-100">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 text-xs font-semibold uppercase tracking-wider bg-zinc-50">
                                <User size={14} /> Personal Information
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                                Hello, I am <br /><span className="underline decoration-2 underline-offset-4">LE THANH HOA</span>
                            </h1>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 text-sm text-zinc-700">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-zinc-100 rounded-md text-black">
                                        <MapPin size={16} />
                                    </div>
                                    <span className="truncate">Cu Chi, TP.HCM</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-zinc-100 rounded-md text-black">
                                        <Phone size={16} />
                                    </div>
                                    <span>(+84) 39 735 4156</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-zinc-100 rounded-md text-black">
                                        <Mail size={16} />
                                    </div>
                                    <span className="truncate">lethanhhoa.cntt.anm@gmail.com</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-zinc-100 rounded-md text-black">
                                        <GithubFilled size={16} />
                                    </div>
                                    <a href="https://github.com/lethanhhoacnttanm-ops" target="_blank" rel="noreferrer" className="hover:underline font-medium">
                                        github.com/lethanhhoacnttanm-ops
                                    </a>
                                </div>

                                <div className="flex items-center gap-3 sm:col-span-2">
                                    <div className="p-2 bg-zinc-100 rounded-md text-black">
                                        <LinkedinFilled size={16} />
                                    </div>
                                    <a href="https://www.linkedin.com/in/lethanhhoa-dev" target="_blank" rel="noreferrer" className="hover:underline font-medium">
                                        linkedin.com/in/lethanhhoa-dev
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="px-6 py-3 bg-black text-white font-medium text-sm rounded-md hover:bg-zinc-800 transition-colors shadow-sm"
                                >
                                    Contact now
                                </button>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="px-6 py-3 border border-zinc-300 text-zinc-900 font-medium text-sm rounded-md hover:bg-zinc-50 transition-colors"
                                >
                                    View projects
                                </button>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-zinc-300 to-zinc-100 rounded-2xl blur-sm opacity-75"></div>
                            <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                                    alt="Workspace"
                                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="objective" className="py-24 bg-zinc-50 border-b border-zinc-100">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-zinc-200">
                            <img
                                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                                alt="Career Objective"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 text-xs font-semibold uppercase tracking-wider bg-white">
                                <Target size={14} /> Objective (Career Objective)
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Career Direction</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                As a recent Cybersecurity graduate with a solid foundation in web software development and system processes, I am eager to join a company as a Full-stack Intern. I look forward to applying my technical expertise, problem-solving mindset, and experience working in Agile/Scrum teams to the role. Additionally, I am excited to develop skills in requirements gathering, system analysis, and documentation to effectively bridge the gap between clients and the development team.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. SKILLS */}
                <section id="skills" className="py-24 border-b border-zinc-100">
                    <div className="max-w-7xl mx-auto px-6 space-y-12">
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 text-xs font-semibold uppercase tracking-wider bg-zinc-50">
                                <Wrench size={14} /> Skills
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Professional skills</h2>
                            <p className="text-zinc-600 text-sm">The technologies and tools I use daily in my work.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm space-y-4 hover:border-black transition-colors">
                                <h3 className="font-semibold text-lg border-b border-zinc-100 pb-3">Core Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['JavaScript (ES6+)', 'TypeScript', 'ReactJS', 'HTML5 / CSS3', 'Tailwind CSS'].map((skill, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-800 rounded-md">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm space-y-4 hover:border-black transition-colors">
                                <h3 className="font-semibold text-lg border-b border-zinc-100 pb-3">Libraries & UI</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Shadcn UI', 'Radix UI', 'Redux Toolkit', 'React Router', 'Lucide Icons', 'Zod'].map((skill, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-800 rounded-md">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm space-y-4 hover:border-black transition-colors">
                                <h3 className="font-semibold text-lg border-b border-zinc-100 pb-3">Tools & Workflow</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Git / GitHub', 'Vite / Webpack', 'Postman', 'Figma', 'Vercel / Netlify', 'Jira / Agile'].map((skill, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-800 rounded-md">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="education" className="py-24 bg-zinc-50 border-b border-zinc-100">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 text-xs font-semibold uppercase tracking-wider bg-white">
                                <GraduationCap size={14} /> Education
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Education & Qualifications</h2>
                            <p className="text-zinc-600 text-sm">My educational journey and official certifications.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            <div className="lg:col-span-7 space-y-6">

                                {eduPage === 0 ? (
                                    <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-6 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-6">
                                            <div>
                                                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Full-time University</span>
                                                <h3 className="text-xl font-bold text-zinc-900 mt-1">Foreign Language and Computer Science University (HUFLIT)</h3>
                                                <p className="text-zinc-600 text-sm mt-1">Bachelor's Degree in Network Security</p>
                                            </div>
                                            <span className="px-3 py-1 bg-zinc-100 text-zinc-800 text-xs font-semibold rounded-full w-fit h-fit">
                                                2022 - 2026
                                            </span>
                                        </div>

                                        <p className="text-zinc-600 text-sm leading-relaxed">
                                            Possesses a solid foundation in system security, network system design, data structures, algorithms, and user data management. Has completed projects utilizing VMware virtual machines.                                        </p>

                                        <div className="space-y-3 pt-2">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Documents & Certifications</h4>

                                            <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 bg-zinc-50 hover:border-black transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-white rounded border border-zinc-200 text-black"><GraduationCap size={18} /></div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-zinc-900">Degree Cover</p>
                                                        <p className="text-xs text-zinc-500">High-quality image format</p>
                                                    </div>
                                                </div>
                                                <a href="/IMG_7877.HEIC" download className="px-3 py-1.5 bg-black text-white text-xs font-medium rounded hover:bg-zinc-800 transition-colors">Download Image</a>
                                            </div>

                                            <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 bg-zinc-50 hover:border-black transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-white rounded border border-zinc-200 text-black"><GraduationCap size={18} /></div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-zinc-900">The Degree of Bachelor (Official Degree)</p>
                                                        <p className="text-xs text-zinc-500">Certificate of Graduation from a Full-time University Program</p>
                                                    </div>
                                                </div>
                                                <a href="/IMG_7878.HEIC" download className="px-3 py-1.5 bg-black text-white text-xs font-medium rounded hover:bg-zinc-800 transition-colors">Download Image</a>
                                            </div>

                                            <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 bg-zinc-50 hover:border-black transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-white rounded border border-zinc-200 text-black"><GraduationCap size={18} /></div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-zinc-900">Diploma Supplement (Transcript / Diploma)</p>
                                                        <p className="text-xs text-zinc-500">Certificate of Completion for University Programs</p>
                                                    </div>
                                                </div>
                                                <a href="/IMG_7880.HEIC" download className="px-3 py-1.5 bg-black text-white text-xs font-medium rounded hover:bg-zinc-800 transition-colors">Download Image</a>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-6 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-6">
                                            <div>
                                                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">In-depth training</span>
                                                <h3 className="text-xl font-bold text-zinc-900 mt-1">MindX Technology School</h3>
                                                <p className="text-zinc-600 text-sm mt-1">Full-stack Web Developer Training Program</p>
                                            </div>
                                            <span className="px-3 py-1 bg-zinc-100 text-zinc-800 text-xs font-semibold rounded-full w-fit h-fit">
                                                2025 - 2026
                                            </span>
                                        </div>

                                        <p className="text-zinc-600 text-sm leading-relaxed">
                                            Focus on hands-on experience with modern web development technologies using the MERN stack—including ReactJS, Node.js, Express.js, and MongoDB—while honing teamwork skills and building real-world projects that span the entire lifecycle, from system analysis to cloud deployment.
                                        </p>

                                        <div className="space-y-3 pt-2">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Documents & Certificates</h4>

                                            <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 bg-zinc-50 hover:border-black transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-white rounded border border-zinc-200 text-black"><GraduationCap size={18} /></div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-zinc-900">MindX XCAREER Graduation Certificate</p>
                                                        <p className="text-xs text-zinc-500">Certificate of Completion for Full-stack Web Development Program</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <a
                                                        href="/lethanhhoa-mindx-certificate.pdf"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-3 py-1.5 border border-zinc-300 text-zinc-900 text-xs font-medium rounded hover:bg-zinc-100 transition-colors"
                                                    >
                                                        View
                                                    </a>

                                                    <a
                                                        href="/lethanhhoa-mindx-certificate.pdf"
                                                        download="MindX_Certificate_LeThanhHoa.pdf"
                                                        className="px-3 py-1.5 bg-black text-white text-xs font-medium rounded hover:bg-zinc-800 transition-colors"
                                                    >
                                                        Download PDF
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 bg-zinc-50 hover:border-black transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-white rounded border border-zinc-200 text-black"><GraduationCap size={18} /></div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-zinc-900">Jaxtina TOEIC</p>
                                                        <p className="text-xs text-zinc-500">Jaxtina's TOEIC certification program for MindX's exit requirement</p>
                                                    </div>
                                                </div>
                                                <a href="/jaxtina-toeic-lethanhhoa.png" download className="px-3 py-1.5 bg-black text-white text-xs font-medium rounded hover:bg-zinc-800 transition-colors">Download Image</a>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center justify-between pt-2 px-2">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setEduPage(0)}
                                            className={`h-2.5 rounded-full transition-all duration-300 ${eduPage === 0 ? 'w-8 bg-black' : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'}`}
                                            title="HUFLIT"
                                        />
                                        <button
                                            onClick={() => setEduPage(1)}
                                            className={`h-2.5 rounded-full transition-all duration-300 ${eduPage === 1 ? 'w-8 bg-black' : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'}`}
                                            title="MindX"
                                        />
                                    </div>

                                    <div className="text-xs text-zinc-500 font-medium">
                                        {eduPage === 0 ? '1/2: HUFLIT Graduation' : '2/2: MindX Graduation'}
                                    </div>
                                </div>

                            </div>

                            <div className="lg:col-span-5 relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-zinc-300 to-zinc-100 rounded-2xl blur-sm opacity-75"></div>
                                <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl aspect-3/4">
                                    <img
                                        src={eduPage === 0
                                            ? "/att.mZGZ7ylIX1l2D82OHvajpZwsA3W58yA9jafGOsV0n8M.jpg"
                                            : "/att.mZGZ7ylIX1l2D82OHvajpZwsA3W58yA9jafGOsV0n8M.jpg"
                                        }
                                        alt="Lê Thanh Hoà - Education"
                                        className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent text-white">
                                        <p className="text-sm font-semibold tracking-wide">
                                            {eduPage === 0 ? 'HUFLIT Graduation Ceremony' : 'MindX Full-stack Web Developer Graduation Ceremony'}
                                        </p>
                                        <p className="text-xs text-zinc-300 mt-1">
                                            {eduPage === 0 ? 'Bachelor of Information Technology – Class of 2022–2026' : 'Full-stack Web Developer Program 2025 - 2026'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="experience" className="py-24 border-b border-zinc-100">
                    <div className="max-w-7xl mx-auto px-6 space-y-12">
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 text-xs font-semibold uppercase tracking-wider bg-zinc-50">
                                <Briefcase size={14} /> Work Experience
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-8">
                            <div className="relative pl-6 border-l-2 border-black space-y-3">
                                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-black border-2 border-white"></div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                    <h3 className="text-lg font-bold">WordPress Website Management Intern</h3>
                                    <span className="text-xs font-semibold text-zinc-500">10/2025 - 12/2025</span>
                                </div>
                                <p className="text-sm font-medium text-zinc-700">QT Property</p>
                                <ul className="list-disc list-inside text-sm text-zinc-600 space-y-1">
                                    <li>Manage and maintain WordPress websites for real estate projects.</li>
                                    <li>Customize website layouts using Elementor and WordPress themes.</li>
                                    <li>Update plugins, monitor website performance, and resolve basic technical issues.</li>
                                    <li>Publish and manage website content while ensuring SEO-friendly formatting.</li>
                                    <li>Collaborate with team members to improve user experience and website usability.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="py-24 bg-zinc-50 border-b border-zinc-100">
                    <div className="max-w-7xl mx-auto px-6 space-y-12">
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 text-xs font-semibold uppercase tracking-wider bg-white">
                                <FolderGit2 size={14} /> Projects
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                            <p className="text-zinc-600 text-sm">A selection of real-world products I've developed.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <div className="aspect-video bg-zinc-200 overflow-hidden">
                                    <img
                                        src="/logo.png"
                                        alt="E-Commerce Dashboard"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">E-Commerce Admin Dashboard</h3>
                                        <p className="text-sm text-zinc-600">
                                            A comprehensive sales management system featuring statistical charts, product and order management, and staff role-based access control.
                                        </p>
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        <div className="flex flex-wrap gap-1.5">
                                            {['ReactJS', 'JavaScript', 'TailwindcssV4', 'MongoDB', 'Ant Design'].map((t, idx) => (
                                                <span key={idx} className="px-2.5 py-0.5 text-xs bg-zinc-100 rounded text-zinc-700 font-medium">{t}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-4 pt-2 border-t border-zinc-100">
                                            <a href="https://github.com/lethanhhoacnttanm-ops/FinalsProject-Ecommerce" className="text-xs font-semibold flex items-center gap-1 hover:underline">
                                                <User size={14} /> Source Code
                                            </a>
                                            <a href="https://finals-project-ecommerce.vercel.app" className="text-xs font-semibold flex items-center gap-1 hover:underline">
                                                <ExternalLink size={14} /> Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <div className="aspect-video bg-zinc-200 overflow-hidden">
                                    <img
                                        src="/hrm_system_logo.png"
                                        alt="HRM System"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">HRM (Human Resource Management)</h3>
                                        <p className="text-sm text-zinc-600">
                                            An application for managing human resources, timekeeping, and employment contracts, featuring AI integration to assist with internal information retrieval.
                                        </p>
                                    </div>  
                                    <div className="space-y-4 pt-2">
                                        <div className="flex flex-wrap gap-1.5">
                                            {['ReactJS', 'JavaScript', 'TailwindcssV4', 'MongoDB', 'Shadcn-UI'].map((t, idx) => (
                                                <span key={idx} className="px-2.5 py-0.5 text-xs bg-zinc-100 rounded text-zinc-700 font-medium">{t}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-4 pt-2 border-t border-zinc-100">
                                            <a href="https://github.com/lethanhhoacnttanm-ops/Project-HRM" className="text-xs font-semibold flex items-center gap-1 hover:underline    ">
                                                <User size={14} /> Source Code
                                            </a>
                                            <a href="https://project-hrm-zeta.vercel.app/login" className="text-xs font-semibold flex items-center gap-1 hover:underline">
                                                <ExternalLink size={14} /> Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* ================= FOOTER ================= */}
            <footer className="border-t border-zinc-200 py-8 bg-zinc-50 text-center text-xs text-zinc-500">
                <p>© {new Date().getFullYear()} Frontend Developer Portfolio. Built with React & Tailwind CSS.</p>
            </footer>

            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-6 right-6 p-3 bg-black text-white rounded-full shadow-lg hover:bg-zinc-800 transition-colors z-50"
                >
                    <ArrowUp size={18} />
                </button>
            )}

        </div>
    );
}