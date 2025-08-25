import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedTutor, setSelectedTutor] = useState<any>(null);

  const subjects = [
    { id: 'all', name: 'Все предметы', icon: 'BookOpen' },
    { id: 'math', name: 'Математика', icon: 'Calculator' },
    { id: 'physics', name: 'Физика', icon: 'Zap' },
    { id: 'chemistry', name: 'Химия', icon: 'TestTube' },
    { id: 'biology', name: 'Биология', icon: 'Leaf' },
    { id: 'english', name: 'Английский', icon: 'MessageSquare' },
    { id: 'russian', name: 'Русский язык', icon: 'PenTool' },
    { id: 'history', name: 'История', icon: 'Clock' },
    { id: 'programming', name: 'Программирование', icon: 'Code' }
  ];

  const tutors = [
    {
      id: 1,
      name: 'Анна Петрова',
      subject: 'math',
      subjects: ['Математика', 'Алгебра', 'Геометрия'],
      price: 1500,
      rating: 4.9,
      reviews: 127,
      experience: 8,
      education: 'МГУ им. М.В. Ломоносова, мехмат',
      description: 'Преподаю математику более 8 лет. Готовлю к ЕГЭ, ОГЭ, помогаю с домашними заданиями. Индивидуальный подход к каждому ученику.',
      avatar: '/api/placeholder/100/100',
      verified: true,
      online: true,
      responseTime: '15 мин',
      successRate: 98,
      lessons: 450
    },
    {
      id: 2,
      name: 'Михаил Иванов',
      subject: 'physics',
      subjects: ['Физика', 'Астрономия'],
      price: 1800,
      rating: 4.8,
      reviews: 89,
      experience: 12,
      education: 'МФТИ, факультет общей и прикладной физики',
      description: 'Кандидат физико-математических наук. Специализируюсь на подготовке к олимпиадам и поступлению в технические вузы.',
      avatar: '/api/placeholder/100/100',
      verified: true,
      online: false,
      responseTime: '1 час',
      successRate: 95,
      lessons: 320
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      subject: 'english',
      subjects: ['Английский язык', 'IELTS', 'TOEFL'],
      price: 1200,
      rating: 4.7,
      reviews: 203,
      experience: 6,
      education: 'МГЛУ, факультет английского языка',
      description: 'Носитель языка уровня C2. Готовлю к международным экзаменам, помогаю с разговорной практикой и грамматикой.',
      avatar: '/api/placeholder/100/100',
      verified: true,
      online: true,
      responseTime: '10 мин',
      successRate: 92,
      lessons: 680
    },
    {
      id: 4,
      name: 'Дмитрий Козлов',
      subject: 'programming',
      subjects: ['Python', 'JavaScript', 'React'],
      price: 2000,
      rating: 4.9,
      reviews: 156,
      experience: 5,
      education: 'ВШЭ, факультет компьютерных наук',
      description: 'Senior разработчик в IT-компании. Обучаю программированию с нуля, помогаю с проектами и подготовкой к собеседованиям.',
      avatar: '/api/placeholder/100/100',
      verified: true,
      online: true,
      responseTime: '5 мин',
      successRate: 97,
      lessons: 280
    },
    {
      id: 5,
      name: 'София Волкова',
      subject: 'chemistry',
      subjects: ['Химия', 'Биохимия'],
      price: 1400,
      rating: 4.6,
      reviews: 94,
      experience: 10,
      education: 'СПбГУ, химический факультет',
      description: 'Преподаю химию в школе и провожу индивидуальные занятия. Делаю сложное простым и понятным.',
      avatar: '/api/placeholder/100/100',
      verified: true,
      online: false,
      responseTime: '2 часа',
      successRate: 89,
      lessons: 190
    },
    {
      id: 6,
      name: 'Артём Новиков',
      subject: 'russian',
      subjects: ['Русский язык', 'Литература'],
      price: 1300,
      rating: 4.8,
      reviews: 178,
      experience: 7,
      education: 'МПУ, филологический факультет',
      description: 'Кандидат филологических наук. Готовлю к ЕГЭ по русскому языку и литературе, помогаю с сочинениями.',
      avatar: '/api/placeholder/100/100',
      verified: true,
      online: true,
      responseTime: '20 мин',
      successRate: 94,
      lessons: 380
    }
  ];

  const testimonials = [
    {
      name: 'Мария Сидорова',
      role: 'Ученица 11 класса',
      text: 'Благодаря репетитору по математике смогла поднять балл с 65 до 85! Очень довольна результатом.',
      rating: 5
    },
    {
      name: 'Родители Александра',
      role: 'Родители ученика 9 класса',
      text: 'Сын начал лучше понимать физику. Репетитор объясняет сложные темы простыми словами.',
      rating: 5
    },
    {
      name: 'Игорь Петров',
      role: 'Студент 2 курса',
      text: 'Изучаю программирование с нуля. За 3 месяца освоил Python и уже делаю первые проекты!',
      rating: 5
    }
  ];

  const filteredTutors = tutors.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tutor.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSubject = selectedSubject === 'all' || tutor.subject === selectedSubject;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && tutor.price < 1500) ||
                        (priceRange === 'medium' && tutor.price >= 1500 && tutor.price < 2000) ||
                        (priceRange === 'high' && tutor.price >= 2000);
    
    return matchesSearch && matchesSubject && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-600">SkillUp.school</h1>
                <p className="text-xs text-muted-foreground">Найди своего репетитора</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a href="#tutors" className="text-muted-foreground hover:text-foreground transition-colors">Репетиторы</a>
              <a href="#subjects" className="text-muted-foreground hover:text-foreground transition-colors">Предметы</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">Как это работает</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Стать репетитором
              </Button>
              <Button size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Найди идеального
            <span className="text-blue-600 block">репетитора</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Более 1000+ проверенных преподавателей по всем школьным предметам. 
            Индивидуальный подход и гарантированный результат.
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Найти по предмету или имени преподавателя..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              <Button size="lg" className="px-8">
                <Icon name="Search" size={20} className="mr-2" />
                Найти репетитора
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-muted-foreground">Репетиторов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-sm text-muted-foreground">Довольных учеников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-muted-foreground">Предметов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Популярные предметы</h3>
            <p className="text-muted-foreground">Выберите предмет для поиска репетитора</p>
          </div>
          
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {subjects.map((subject) => (
              <Button
                key={subject.id}
                variant={selectedSubject === subject.id ? 'default' : 'outline'}
                className="flex-shrink-0 flex items-center space-x-2"
                onClick={() => setSelectedSubject(subject.id)}
              >
                <Icon name={subject.icon as any} size={16} />
                <span className="whitespace-nowrap">{subject.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section id="tutors" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">
              {selectedSubject === 'all' ? 'Все репетиторы' : subjects.find(s => s.id === selectedSubject)?.name}
            </h3>
            <div className="flex items-center space-x-4">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая цена</SelectItem>
                  <SelectItem value="low">До 1500 ₽</SelectItem>
                  <SelectItem value="medium">1500-2000 ₽</SelectItem>
                  <SelectItem value="high">От 2000 ₽</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="rating">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="price-asc">Сначала дешевые</SelectItem>
                  <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                  <SelectItem value="experience">По опыту</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutors.map((tutor) => (
              <Card key={tutor.id} className="group hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={tutor.avatar} />
                        <AvatarFallback>{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {tutor.online && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold">{tutor.name}</h4>
                        {tutor.verified && (
                          <Icon name="CheckCircle" size={16} className="text-blue-500" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{tutor.education}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{tutor.experience} лет опыта</span>
                        <span>{tutor.lessons} уроков</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {tutor.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {tutor.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={14} 
                            className={i < Math.floor(tutor.rating) ? "fill-current" : ""} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {tutor.rating} ({tutor.reviews})
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{tutor.price} ₽</div>
                      <div className="text-xs text-muted-foreground">за урок</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span>Ответит через {tutor.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-600">
                      <Icon name="TrendingUp" size={14} />
                      <span>{tutor.successRate}% успешности</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="flex-1" onClick={() => setSelectedTutor(tutor)}>
                          <Icon name="MessageCircle" size={16} className="mr-2" />
                          Написать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Связаться с {tutor.name}</DialogTitle>
                          <DialogDescription>
                            Отправьте сообщение репетитору, чтобы обсудить детали занятий
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">Ваше имя</label>
                            <Input placeholder="Введите ваше имя" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Email</label>
                            <Input type="email" placeholder="your@email.com" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Сообщение</label>
                            <Textarea 
                              placeholder="Расскажите о ваших целях, уровне подготовки и предпочтениях по расписанию..."
                              rows={4}
                            />
                          </div>
                          <Button className="w-full" size="lg">
                            <Icon name="Send" size={16} className="mr-2" />
                            Отправить сообщение
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <Icon name="Eye" size={16} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        {selectedTutor && (
                          <div>
                            <DialogHeader>
                              <DialogTitle className="text-2xl">Профиль репетитора</DialogTitle>
                            </DialogHeader>
                            <div className="mt-6 space-y-6">
                              <div className="flex items-start space-x-6">
                                <Avatar className="w-24 h-24">
                                  <AvatarImage src={tutor.avatar} />
                                  <AvatarFallback>{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold mb-2">{tutor.name}</h3>
                                  <p className="text-muted-foreground mb-3">{tutor.education}</p>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <span className="font-medium">Опыт:</span> {tutor.experience} лет
                                    </div>
                                    <div>
                                      <span className="font-medium">Уроков:</span> {tutor.lessons}
                                    </div>
                                    <div>
                                      <span className="font-medium">Рейтинг:</span> {tutor.rating} ({tutor.reviews} отзывов)
                                    </div>
                                    <div>
                                      <span className="font-medium">Успешность:</span> {tutor.successRate}%
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h4 className="font-semibold mb-3">Предметы</h4>
                                <div className="flex flex-wrap gap-2">
                                  {tutor.subjects.map((subject, idx) => (
                                    <Badge key={idx} variant="outline">{subject}</Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-3">О себе</h4>
                                <p className="text-muted-foreground">{tutor.description}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-3">Стоимость и условия</h4>
                                <div className="bg-muted/30 p-4 rounded-lg">
                                  <div className="text-2xl font-bold text-blue-600 mb-2">{tutor.price} ₽ за урок</div>
                                  <p className="text-sm text-muted-foreground">
                                    • Первый урок — знакомство (30 минут бесплатно)<br/>
                                    • Длительность урока: 60 минут<br/>
                                    • Возможны занятия онлайн и офлайн
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTutors.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Users" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Репетиторы не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Как это работает</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Простой и понятный процесс поиска идеального репетитора
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Найдите репетитора',
                description: 'Используйте поиск и фильтры, чтобы найти подходящего преподавателя по предмету и бюджету',
                icon: 'Search'
              },
              {
                step: 2,
                title: 'Свяжитесь',
                description: 'Отправьте сообщение репетитору, расскажите о ваших целях и предпочтениях',
                icon: 'MessageCircle'
              },
              {
                step: 3,
                title: 'Пробный урок',
                description: 'Проведите бесплатное знакомство, чтобы понять, подходит ли вам преподаватель',
                icon: 'Play'
              },
              {
                step: 4,
                title: 'Начните обучение',
                description: 'Составьте удобное расписание и начните достигать ваших образовательных целей',
                icon: 'Trophy'
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={24} className="text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Отзывы учеников</h3>
            <p className="text-muted-foreground text-lg">
              Что говорят наши ученики и их родители
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <span className="font-bold text-blue-600">SkillUp.school</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для поиска лучших репетиторов. Качественное образование для каждого.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ученикам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Найти репетитора</a></li>
                <li><a href="#" className="hover:text-foreground">Как это работает</a></li>
                <li><a href="#" className="hover:text-foreground">Цены</a></li>
                <li><a href="#" className="hover:text-foreground">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Репетиторам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Стать репетитором</a></li>
                <li><a href="#" className="hover:text-foreground">Требования</a></li>
                <li><a href="#" className="hover:text-foreground">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground">Сообщество</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 800 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>help@skillup.school</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Онлайн-чат</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 SkillUp.school. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground">Условия использования</a>
              <a href="#" className="hover:text-foreground">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;