import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [deviceModel, setDeviceModel] = useState('');
  const [compatibility, setCompatibility] = useState<null | {compatible: boolean, message: string}>(null);

  const androidVersions = [
    {
      version: 'Android 16',
      codename: 'Baklava',
      apiLevel: 35,
      releaseDate: 'Q2 2025',
      status: 'Developer Preview',
      features: ['Enhanced AI Integration', 'Privacy Sandbox', 'Improved Battery Life'],
      downloadSize: '1.2 GB',
      supported: true
    },
    {
      version: 'Android 15',
      codename: 'Vanilla Ice Cream',
      apiLevel: 34,
      releaseDate: 'Q3 2024',
      status: 'Stable',
      features: ['Partial Screen Sharing', 'Private Space', 'Enhanced Security'],
      downloadSize: '1.1 GB',
      supported: true
    },
    {
      version: 'Android 14',
      codename: 'Upside Down Cake',
      apiLevel: 34,
      releaseDate: 'Q4 2023',
      status: 'Stable',
      features: ['Customizable Lock Screen', 'Regional Preferences', 'Enhanced Accessibility'],
      downloadSize: '1.0 GB',
      supported: true
    },
    {
      version: 'Android 13',
      codename: 'Tiramisu',
      apiLevel: 33,
      releaseDate: 'Q3 2022',
      status: 'Stable',
      features: ['Themed App Icons', 'Notification Permission', 'Media Controls'],
      downloadSize: '950 MB',
      supported: true
    }
  ];

  const checkCompatibility = () => {
    if (!deviceModel.trim()) {
      setCompatibility({compatible: false, message: 'Введите модель устройства'});
      return;
    }
    
    // Симуляция проверки совместимости
    const isCompatible = Math.random() > 0.3;
    setCompatibility({
      compatible: isCompatible,
      message: isCompatible 
        ? `${deviceModel} поддерживает установку Android 16`
        : `${deviceModel} требует разблокировку загрузчика для установки`
    });
  };

  const faqItems = [
    {
      question: 'Безопасна ли установка кастомных прошивок?',
      answer: 'Установка кастомных прошивок безопасна при соблюдении инструкций и использовании официальных образов. Всегда делайте резервную копию перед установкой.'
    },
    {
      question: 'Потеряю ли я гарантию на устройство?',
      answer: 'Разблокировка загрузчика и установка кастомных прошивок может привести к потере гарантии. Уточните условия у производителя вашего устройства.'
    },
    {
      question: 'Можно ли вернуться к стоковой прошивке?',
      answer: 'Да, в большинстве случаев можно вернуться к оригинальной прошивке через fastboot или recovery mode. Процедура зависит от производителя.'
    },
    {
      question: 'Какие устройства поддерживаются?',
      answer: 'Поддерживаются популярные устройства от Google Pixel, OnePlus, Xiaomi, Samsung Galaxy (некоторые модели). Полный список доступен в разделе поддержки.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Smartphone" size={24} className="text-primary" />
              <h1 className="text-xl font-bold">Android Launcher</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#versions" className="text-muted-foreground hover:text-foreground transition-colors">Версии</a>
              <a href="#compatibility" className="text-muted-foreground hover:text-foreground transition-colors">Совместимость</a>
              <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">Документация</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Установите новейший
            <span className="text-primary block">Android 16</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Профессиональный инструмент для установки Android прошивок на ваше устройство. 
            Поддержка всех актуальных версий и безопасная установка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать Android 16
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Инструкция
            </Button>
          </div>
        </div>
      </section>

      {/* Compatibility Check */}
      <section id="compatibility" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Icon name="Search" size={24} />
                  Проверка совместимости устройства
                </CardTitle>
                <CardDescription>
                  Введите модель вашего телефона для проверки поддержки Android 16
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Например: Pixel 7, OnePlus 11, Xiaomi Mi 13"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={checkCompatibility}>
                    <Icon name="Search" size={16} className="mr-2" />
                    Проверить
                  </Button>
                </div>
                {compatibility && (
                  <div className={`p-4 rounded-lg border ${
                    compatibility.compatible 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-yellow-50 border-yellow-200 text-yellow-800'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Icon 
                        name={compatibility.compatible ? "CheckCircle" : "AlertTriangle"} 
                        size={20} 
                      />
                      {compatibility.message}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Android Versions */}
      <section id="versions" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Доступные версии Android</h3>
            <p className="text-muted-foreground text-lg">
              От последних Developer Preview до стабильных релизов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {androidVersions.map((android, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Android" size={24} className="text-green-600" />
                        {android.version}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {android.codename} • API Level {android.apiLevel}
                      </CardDescription>
                    </div>
                    <Badge variant={android.status === 'Stable' ? 'default' : 'secondary'}>
                      {android.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Релиз:</span>
                      <p className="text-muted-foreground">{android.releaseDate}</p>
                    </div>
                    <div>
                      <span className="font-medium">Размер:</span>
                      <p className="text-muted-foreground">{android.downloadSize}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium text-sm">Ключевые особенности:</span>
                    <ul className="mt-2 space-y-1">
                      {android.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                    <Button variant="outline">
                      <Icon name="Info" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Tabs */}
      <section id="docs" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Техническая документация</h3>
            <p className="text-muted-foreground text-lg">
              Подробные инструкции для разработчиков и продвинутых пользователей
            </p>
          </div>
          
          <Tabs defaultValue="installation" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="installation">Установка</TabsTrigger>
              <TabsTrigger value="requirements">Требования</TabsTrigger>
              <TabsTrigger value="troubleshooting">Устранение неполадок</TabsTrigger>
            </TabsList>
            
            <TabsContent value="installation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Пошаговая инструкция установки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      'Разблокировка загрузчика (Bootloader Unlock)',
                      'Установка ADB и Fastboot драйверов',
                      'Загрузка образа Android и recovery',
                      'Прошивка через fastboot или recovery mode',
                      'Первоначальная настройка системы'
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="requirements" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Системные требования</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Устройство:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          Разблокированный загрузчик
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          Минимум 8GB внутренней памяти
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          USB отладка включена
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          Заряд батареи более 50%
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Компьютер:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          Windows 10+ / macOS 11+ / Linux
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          ADB Platform Tools
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          USB-кабель для передачи данных
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          Свободное место 3GB+
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="troubleshooting" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Решение частых проблем</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="bootloop">
                      <AccordionTrigger>Устройство не загружается (bootloop)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Перезагрузитесь в recovery mode и выполните wipe data/factory reset. 
                        Если проблема сохраняется, переустановите прошивку или вернитесь к стоковой версии.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="drivers">
                      <AccordionTrigger>Компьютер не видит устройство</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Убедитесь что установлены правильные USB-драйверы для вашего устройства. 
                        Попробуйте другой USB-кабель и порт. Включите режим разработчика и USB-отладку.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="fastboot">
                      <AccordionTrigger>Ошибки в fastboot mode</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Проверьте что загрузчик действительно разблокирован командой "fastboot oem device-info". 
                        Убедитесь в совместимости образа прошивки с вашей моделью устройства.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h3>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы о кастомных прошивках
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Smartphone" size={24} className="text-primary" />
                <span className="font-bold">Android Launcher</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональный инструмент для установки кастомных прошивок Android
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Загрузки</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Android 16</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Android 15</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ADB Tools</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Драйверы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Техподдержка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Багрепорты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  support@androidlauncher.dev
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={14} />
                  Telegram канал
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Github" size={14} />
                  GitHub
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Android Launcher. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;