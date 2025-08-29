import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const menuItems = [
    { name: 'Главная', href: '#', active: true },
    { name: 'Форум', href: '#forum' },
    { name: 'О сервере', href: '#about' },
    { name: 'Акции и Бонусы', href: '#bonuses' },
    { name: 'Загрузки', href: '#downloads' },
    { name: 'Регистрация', href: '#register' }
  ];

  const serverStats = [
    { label: 'Онлайн игроков', value: '2,847', icon: 'Users' },
    { label: 'Гильдий активных', value: '156', icon: 'Shield' },
    { label: 'Лет работы', value: '8', icon: 'Clock' },
    { label: 'Рейтинг сервера', value: '4.9', icon: 'Star' }
  ];

  const serverFeatures = [
    {
      title: 'Стабильность 99.9%',
      description: 'Надежные сервера с минимальным пингом',
      icon: 'Activity'
    },
    {
      title: 'Активная администрация',
      description: 'Поддержка игроков 24/7 и регулярные ивенты',
      icon: 'Shield'
    },
    {
      title: 'Сбалансированная экономика',
      description: 'Продуманная игровая экономика без донат-победы',
      icon: 'TrendingUp'
    },
    {
      title: 'Уникальный контент',
      description: 'Эксклюзивные квесты и локации от нашей команды',
      icon: 'Zap'
    }
  ];

  const latestNews = [
    {
      title: 'Обновление "Врата Бессмертия" уже доступно!',
      date: '29 августа 2025',
      category: 'Обновления',
      excerpt: 'Новая локация, подземелья и уникальные награды ждут храбрых героев...'
    },
    {
      title: 'Турнир гильдий - призовой фонд 500,000 монет',
      date: '27 августа 2025', 
      category: 'События',
      excerpt: 'Регистрация открыта! Покажите мощь вашей гильдии в эпических сражениях...'
    },
    {
      title: 'Летняя распродажа в игровом магазине -50%',
      date: '25 августа 2025',
      category: 'Акции',
      excerpt: 'Скидки на премиум предметы, костюмы и усиления до конца месяца...'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <div className="text-xl font-bold">
                <span className="text-primary">Perfect</span>
                <span className="text-foreground">World</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    item.active ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Language & Login */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                RU
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-900/20 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Сервер Perfect World International
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent">
                  Легенда возвращается
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Присоединяйтесь к тысячам игроков в самом стабильном сервере Perfect World. 
                Эпические приключения, PvP сражения и незабываемые моменты ждут вас!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Download" size={20} className="mr-2" />
                Начать игру
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть трейлер
              </Button>
            </div>

            {/* Server Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {serverStats.map((stat, index) => (
                <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                      <Icon name={stat.icon} size={24} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Server Features */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Почему выбирают наш сервер?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Многолетний опыт и преданность игровому сообществу делают нас лучшими
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serverFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Последние новости</h2>
            <p className="text-muted-foreground">
              Следите за всеми обновлениями и событиями сервера
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-card/80 border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant={news.category === 'Обновления' ? 'default' : news.category === 'События' ? 'secondary' : 'outline'}
                      className={news.category === 'Обновления' ? 'bg-primary/20 text-primary' : ''}
                    >
                      {news.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors leading-tight">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {news.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto text-primary hover:bg-transparent group">
                    Читать полностью 
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Icon name="Newspaper" size={20} className="mr-2" />
              Все новости
            </Button>
          </div>
        </div>
      </section>

      {/* Game Preview */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-purple-900/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-2xl blur-3xl"></div>
              <img 
                src="/img/f756f3c0-ed05-4cf8-94a3-2be413aa561f.jpg"
                alt="Perfect World Gameplay"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="bg-primary/20 text-primary mb-4">Игровой процесс</Badge>
                <h2 className="text-4xl font-bold mb-4">
                  Окунитесь в мир <span className="text-primary">Perfect World</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Создайте уникального персонажа, исследуйте огромный открытый мир, 
                  сражайтесь с могущественными боссами и участвуйте в масштабных PvP битвах
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Icon name="Users" size={18} className="mr-2 text-primary" />
                    6 рас
                  </h4>
                  <p className="text-sm text-muted-foreground">Уникальные способности</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Icon name="Swords" size={18} className="mr-2 text-primary" />
                    12 классов
                  </h4>
                  <p className="text-sm text-muted-foreground">Разные стили боя</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Icon name="MapPin" size={18} className="mr-2 text-primary" />
                    Огромный мир
                  </h4>
                  <p className="text-sm text-muted-foreground">Тысячи локаций</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Icon name="Crown" size={18} className="mr-2 text-primary" />
                    Территории
                  </h4>
                  <p className="text-sm text-muted-foreground">Захват городов</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать клиент
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Руководство новичка
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Готовы начать приключение в Perfect World?
            </h2>
            <p className="text-xl text-muted-foreground">
              Скачайте игру бесплатно и присоединяйтесь к легендарному серверу с многолетней историей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать игру (2.3 ГБ)
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-lg px-8">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Создать аккаунт
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Системные требования: Windows 7+ • 4 ГБ ОЗУ • DirectX 9.0c
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <div className="font-bold">
                  <span className="text-primary">Perfect</span>
                  <span className="text-foreground">World</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Официальный сервер Perfect World International с 2017 года
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="MessageSquare" size={18} />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Users" size={18} />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Игра</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Скачать клиент</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Системные требования</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Руководство новичка</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Классы персонажей</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Форум</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Discord сервер</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">VK группа</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Telegram канал</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Техническая поддержка</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Правила сервера</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Восстановить пароль</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Связаться с нами</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Perfect World Server. Все права защищены. | 
              <a href="#" className="hover:text-primary transition-colors ml-1">Политика конфиденциальности</a> | 
              <a href="#" className="hover:text-primary transition-colors ml-1">Пользовательское соглашение</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;