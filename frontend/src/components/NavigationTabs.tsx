import { HomeIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const tabs = [
    { name: 'Inicio', href: '/inicio', icon: HomeIcon },
    { name: 'Clases', href: '/clases', icon: AcademicCapIcon },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function NavigationTabs() {
    const location = useLocation()
    const navigate = useNavigate()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        navigate(e.target.value)
    }
    return (
        <>
        <div className=' bg-[66ccff] mb-0.5'></div>
        <div className='mb-1'>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    onChange={ handleChange }
                >
                    {tabs.map((tab) => (
                        <option 
                            value={tab.href}
                            key={tab.name}
                        >{tab.name}</option>
                    ))}
                </select>
            </div>

            <div className="hidden sm:block pb-0.5">
                <nav className="flex justify-center" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.href}
                            className={classNames(
                                location.pathname === tab.href
                                    ? 'border-[#66ccff] text-[#66ccff]'
                                    : 'border-transparent text-gray-500 hover:text-gray-700',
                                'group inline-flex items-center py-2 px-4 text-xl font-medium'
                            )}
                        >
                            <tab.icon
                                className={classNames(
                                    location.pathname === tab.href ? 'text-[#66ccff]' : 'text-gray-400 group-hover:text-gray-500',
                                    '-ml-0.5 mr-2 h-4 w-4'
                                )}
                                aria-hidden="true"
                            />
                            <span>{tab.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    </>
    )
}