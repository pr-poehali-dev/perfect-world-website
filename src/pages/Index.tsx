import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const menuItems = [
    { name: 'Главная', icon: 'Home', active: true },
    { name: 'О игре', icon: 'Info' },
    { name: 'Форум', icon: 'MessageSquare' },
    { name: 'Магазин', icon: 'ShoppingBag' },
    { name: 'Регистрация', icon: 'UserPlus' },
    { name: 'Загрузки', icon: 'Download' },
    { name: 'Новости', icon: 'Newspaper' }
  ];

  const gameFeatures = [
    {
      title: 'Мистический Мир',
      description: 'Исследуйте бескрайние земли Perfect World с магическими существами',
      icon: 'Sparkles'
    },
    {
      title: 'PvP Сражения',
      description: 'Сражайтесь с другими игроками в эпических битвах за территории',
      icon: 'Swords'
    },
    {
      title: 'Гильдии',
      description: 'Создавайте альянсы и завоевывайте мир вместе с друзьями',
      icon: 'Shield'
    },
    {
      title: 'Полёты',
      description: 'Покоряйте небеса на магических крыльях и летающих мечах',
      icon: 'Zap'
    }
  ];

  const news = [
    {
      title: 'Новое обновление "Небесные Врата"',
      date: '29 августа 2025',
      type: 'Обновление'
    },
    {
      title: 'Турнир PvP - Призовой фонд 100,000 золота',
      date: '25 августа 2025', 
      type: 'Событие'
    },
    {
      title: 'Скидки в игровом магазине до 50%',
      date: '20 августа 2025',
      type: 'Акция'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      {/* Navigation */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Perfect World
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-secondary/50 ${
                    item.active ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-primary'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
              <Icon name="Play" size={16} className="mr-2" />
              Играть
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/10 to-pink-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Free to Play
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
                  Perfect World
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Окунитесь в мистический мир древних легенд, где магия правит реальностью, 
                  а герои вершат судьбы целых континентов
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать игру
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Icon name="Play" size={20} className="mr-2" />
                  Трейлер
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/f756f3c0-ed05-4cf8-94a3-2be413aa561f.jpg"
                alt="Perfect World Hero"
                className="relative z-10 w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Особенности игры</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя уникальные возможности Perfect World
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
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

      {/* News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Последние новости</h2>
            <p className="text-muted-foreground">
              Будьте в курсе всех событий Perfect World
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={item.type === 'Обновление' ? 'default' : item.type === 'Событие' ? 'secondary' : 'outline'}>
                      {item.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto text-primary hover:bg-transparent">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Store Preview */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-purple-600/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/27b82e37-b7e0-4390-92f8-d3eb6f83103e.jpg"
                alt="Game Items"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="bg-purple-100 text-purple-700 mb-4">Игровой магазин</Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Магические предметы и экипировка
                </h2>
                <p className="text-muted-foreground text-lg">
                  Приобретайте легендарное оружие, мистические доспехи и редкие артефакты 
                  для усиления своего персонажа
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Icon name="Sword" size={16} className="mr-2 text-primary" />
                    Оружие
                  </h4>
                  <p className="text-sm text-muted-foreground">Мечи, посохи, луки</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Icon name="Shield" size={16} className="mr-2 text-primary" />
                    Броня
                  </h4>
                  <p className="text-sm text-muted-foreground">Доспехи всех классов</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Icon name="Gem" size={16} className="mr-2 text-primary" />
                    Артефакты
                  </h4>
                  <p className="text-sm text-muted-foreground">Магические камни</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Icon name="Zap" size={16} className="mr-2 text-primary" />
                    Крылья
                  </h4>
                  <p className="text-sm text-muted-foreground">Для полётов</p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-primary to-purple-600">
                <Icon name="ShoppingBag" size={16} className="mr-2" />
                Открыть магазин
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Готовы начать приключение?
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к тысячам игроков в эпическом мире Perfect World. 
              Создайте персонажа и начните своё путешествие прямо сейчас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Зарегистрироваться
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Форум игроков
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={16} className="text-white" />
                </div>
                <span className="font-bold">Perfect World</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Эпическая MMORPG с бесконечными возможностями
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Игра</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Системные требования</p>
                <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Скачать клиент</p>
                <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Руководство</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Форум</p>
                <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Discord</p>
                <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">VK группа</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Техподдержка</p>
                <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Правила игры</p>
                <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Политика приватности</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Perfect World. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;