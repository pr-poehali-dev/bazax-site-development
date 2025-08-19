import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/c336caf3-3a0f-4346-9fff-e5cb0a11726e.jpg" 
              alt="BAZAX Logo" 
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-secondary hover:text-primary transition-colors duration-300 relative group">
              Услуги
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors duration-300 relative group">
              О нас
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-secondary hover:text-primary transition-colors duration-300 relative group">
              Проекты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors duration-300 relative group">
              Контакты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in max-w-5xl mx-auto">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/c336caf3-3a0f-4346-9fff-e5cb0a11726e.jpg" 
                alt="BAZAX Logo" 
                className="h-20 md:h-24 w-auto mx-auto mb-6 animate-bounce-subtle"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
              BAZAX
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-8 max-w-3xl mx-auto font-light" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Проектирование будущего сегодня
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ведущая проектная организация, создающая инновационные архитектурные решения 
              для промышленных, жилых и общественных объектов с применением передовых технологий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный цикл проектирования от концепции до реализации
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-scale-in border-none shadow-md group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name="Building2" className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors duration-300" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Архитектурное проектирование
                </h3>
                <p className="text-gray-600">
                  Создание уникальных архитектурных решений для жилых, коммерческих и общественных зданий
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-scale-in border-none shadow-md group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name="Settings" className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors duration-300" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Инженерные системы
                </h3>
                <p className="text-gray-600">
                  Проектирование инженерных коммуникаций, систем отопления, вентиляции и электроснабжения
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-scale-in border-none shadow-md group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name="MapPin" className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors duration-300" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Градостроительство
                </h3>
                <p className="text-gray-600">
                  Комплексное планирование городских территорий и разработка генеральных планов развития
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-secondary mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
                О компании BAZAX
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Более 10 лет мы создаем архитектурные решения, которые изменяют облик городов. Наша команда объединяет опытных архитекторов, инженеров и дизайнеров.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-gray-600">Реализованных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-gray-600">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Специалистов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25</div>
                  <div className="text-gray-600">Наград и сертификатов</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-6">
                    <Icon name="Compass" className="text-primary" size={64} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Наша миссия
                  </h3>
                  <p className="text-gray-600">
                    Создавать пространства, которые улучшают качество жизни людей и гармонично вписываются в окружающую среду.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Наши проекты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Примеры реализованных архитектурных решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src="/img/b05d895c-ace7-452a-bc66-5b381f5f12a7.jpg" 
                  alt="Современный офисный комплекс" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-1">Бизнес-центр "Горизонт"</h4>
                  <p className="text-sm">Москва, 2023</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Современный офисный комплекс
                </h3>
                <p className="text-gray-600 mb-4">
                  Многофункциональный бизнес-центр класса А с применением энергоэффективных технологий и современных инженерных решений.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Площадь: 25,000 м²</span>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src="/img/3f244366-2dd0-4ebf-aabb-44ac19eadb31.jpg" 
                  alt="Жилой комплекс" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-1">ЖК "Новые кварталы"</h4>
                  <p className="text-sm">Санкт-Петербург, 2024</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Жилой комплекс премиум-класса
                </h3>
                <p className="text-gray-600 mb-4">
                  Комфортное жилье с развитой инфраструктурой, зелеными зонами и современными планировочными решениями.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Квартир: 400</span>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Напишите нам, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-secondary mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Отправить сообщение
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Ваше имя" className="border-gray-300" />
                      <Input placeholder="Компания" className="border-gray-300" />
                    </div>
                    <Input placeholder="Email" type="email" className="border-gray-300" />
                    <Input placeholder="Телефон" className="border-gray-300" />
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..." 
                      className="border-gray-300 min-h-[120px]"
                    />
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="animate-scale-in">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Офис</h4>
                    <p className="text-gray-600">г. Москва, ул. Архитекторов, д. 15, офис 301</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Email</h4>
                    <p className="text-gray-600">info@bazax.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: по согласованию</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/c336caf3-3a0f-4346-9fff-e5cb0a11726e.jpg" 
                alt="BAZAX Logo" 
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300">
                Проектирование будущего сегодня
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Архитектурное проектирование</li>
                <li>Инженерные системы</li>
                <li>Градостроительство</li>
                <li>Дизайн интерьеров</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>Компания</h4>
              <ul className="space-y-2 text-gray-300">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Новости</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@bazax.ru</li>
                <li>г. Москва, ул. Архитекторов, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 BAZAX. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}