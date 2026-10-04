import {
    home,
    profile,
    blog,
    search,
    saved,
    write,
    roadmap,
    interview,
    resources,
    questions,
    collections,
    personal,
    training,
    base,
} from '../assets/navigation'

export const MAIN_MENU = [
    { label: 'Главная', icon: home },
    { label: 'Мой профиль', icon: profile, active: true }
]

export const MENU_DATA = [
    {
        title: 'Обучение',
        icon: training,
        items: [
            { label: 'Собеседование', icon: interview, active: true },
            { label: 'Roadmap', icon: roadmap }
        ]
    },
    {
        title: 'Блог',
        icon: blog,
        items: [
            { label: 'Все статьи', icon: search, active: true },
            { label: 'Личный блог', icon: personal, active: true },
            { label: 'Написать статью', icon: write, active: true },
            { label: 'Сохранённые', icon: saved, active: true }
        ]
    },
    {
        title: 'База знаний',
        icon: base,
        items: [
            { label: 'Ресурсы', icon: resources },
            { label: 'Вопросы', icon: questions, active: true },
            { label: 'Коллекции', icon: collections }
        ]
    }
]