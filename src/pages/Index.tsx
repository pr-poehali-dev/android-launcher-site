import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Package' },
    { id: 'fruits', name: 'Фрукты и овощи', icon: 'Apple' },
    { id: 'meat', name: 'Мясо и птица', icon: 'Beef' },
    { id: 'dairy', name: 'Молочные продукты', icon: 'Milk' },
    { id: 'bread', name: 'Хлеб и выпечка', icon: 'Cookie' },
    { id: 'drinks', name: 'Напитки', icon: 'Coffee' },
    { id: 'snacks', name: 'Снеки и сладости', icon: 'Candy' },
    { id: 'frozen', name: 'Замороженные', icon: 'Snowflake' },
    { id: 'household', name: 'Бытовая химия', icon: 'Sparkles' }
  ];

  const products = [
    {
      id: 1,
      name: 'Молоко Простоквашино 3.2%',
      price: 89,
      oldPrice: 95,
      discount: 15,
      category: 'dairy',
      image: '/api/placeholder/200/200',
      rating: 4.5,
      reviews: 124,
      weight: '900 мл',
      brand: 'Простоквашино',
      inStock: true,
      isPromo: true
    },
    {
      id: 2,
      name: 'Хлеб Геркулес белый',
      price: 45,
      oldPrice: 52,
      discount: 13,
      category: 'bread',
      image: '/api/placeholder/200/200',
      rating: 4.2,
      reviews: 89,
      weight: '450 г',
      brand: 'Геркулес',
      inStock: true,
      isPromo: true
    },
    {
      id: 3,
      name: 'Яблоки Голден',
      price: 159,
      oldPrice: 189,
      discount: 16,
      category: 'fruits',
      image: '/api/placeholder/200/200',
      rating: 4.7,
      reviews: 203,
      weight: '1 кг',
      brand: 'Местное',
      inStock: true,
      isPromo: true
    },
    {
      id: 4,
      name: 'Куриное филе охлажденное',
      price: 329,
      oldPrice: null,
      discount: 0,
      category: 'meat',
      image: '/api/placeholder/200/200',
      rating: 4.4,
      reviews: 67,
      weight: '1 кг',
      brand: 'Петелинка',
      inStock: true,
      isPromo: false
    },
    {
      id: 5,
      name: 'Coca-Cola классик',
      price: 119,
      oldPrice: 129,
      discount: 8,
      category: 'drinks',
      image: '/api/placeholder/200/200',
      rating: 4.8,
      reviews: 445,
      weight: '2 л',
      brand: 'Coca-Cola',
      inStock: true,
      isPromo: true
    },
    {
      id: 6,
      name: 'Пельмени Цезарь',
      price: 189,
      oldPrice: 210,
      discount: 10,
      category: 'frozen',
      image: '/api/placeholder/200/200',
      rating: 4.3,
      reviews: 156,
      weight: '900 г',
      brand: 'Цезарь',
      inStock: false,
      isPromo: true
    },
    {
      id: 7,
      name: 'Сыр Российский',
      price: 245,
      oldPrice: null,
      discount: 0,
      category: 'dairy',
      image: '/api/placeholder/200/200',
      rating: 4.1,
      reviews: 78,
      weight: '200 г',
      brand: 'Сырный дом',
      inStock: true,
      isPromo: false
    },
    {
      id: 8,
      name: 'Чипсы Lay\'s классик',
      price: 89,
      oldPrice: 99,
      discount: 10,
      category: 'snacks',
      image: '/api/placeholder/200/200',
      rating: 4.6,
      reviews: 289,
      weight: '150 г',
      brand: 'Lay\'s',
      inStock: true,
      isPromo: true
    }
  ];

  const promotions = [
    {
      title: '3=2 на молочные продукты',
      description: 'При покупке 3 товаров - третий в подарок',
      color: 'bg-green-500'
    },
    {
      title: 'Скидка 20% на фрукты',
      description: 'Действует до конца недели',
      color: 'bg-orange-500'
    },
    {
      title: 'Бонусы за покупки',
      description: 'Получайте баллы и тратьте их на скидки',
      color: 'bg-purple-500'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartTotal(total);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-green-600">Пятёрочка</h1>
                  <p className="text-xs text-muted-foreground">Выгодно как никогда</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Тверская, 15</span>
                <Button variant="ghost" size="sm">
                  <Icon name="ChevronDown" size={14} />
                </Button>
              </div>
            </div>

            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Найти товар..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={18} />
                <span className="hidden sm:inline ml-2">Избранное</span>
              </Button>
              
              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Icon name="ShoppingCart" size={18} />
                    <span className="hidden sm:inline ml-2">Корзина</span>
                    {cartItems.length > 0 && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">
                        {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {cartItems.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">Корзина пуста</p>
                    ) : (
                      <>
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-3 py-2">
                            <div className="w-12 h-12 bg-muted rounded-lg"></div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium">{item.name}</h4>
                              <p className="text-xs text-muted-foreground">{item.weight}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Button
                                  variant="outline" 
                                  size="sm"
                                  className="h-6 w-6 p-0"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Icon name="Minus" size={12} />
                                </Button>
                                <span className="text-sm">{item.quantity}</span>
                                <Button
                                  variant="outline" 
                                  size="sm"
                                  className="h-6 w-6 p-0"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Icon name="Plus" size={12} />
                                </Button>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{item.price * item.quantity} ₽</p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 text-muted-foreground"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Icon name="X" size={12} />
                              </Button>
                            </div>
                          </div>
                        ))}
                        <Separator />
                        <div className="space-y-3">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Итого:</span>
                            <span>{cartTotal} ₽</span>
                          </div>
                          <Button className="w-full" size="lg">
                            Перейти к оформлению
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <Button variant="ghost" size="sm">
                <Icon name="User" size={18} />
                <span className="hidden sm:inline ml-2">Войти</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Свежие продукты
                <span className="block text-green-200">каждый день</span>
              </h2>
              <p className="text-xl text-green-100 mb-6">
                Более 15 000 товаров с доставкой от 2 часов. Выгодные цены и постоянные акции.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-green-700">
                  <Icon name="Truck" size={20} className="mr-2" />
                  Доставка от 299 ₽
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                  <Icon name="Gift" size={20} className="mr-2" />
                  Акции и скидки
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {promotions.map((promo, index) => (
                  <Card key={index} className="bg-white/90 backdrop-blur">
                    <CardContent className="p-4">
                      <div className={`w-8 h-8 ${promo.color} rounded-lg mb-2`}></div>
                      <h3 className="font-semibold text-gray-900 mb-1">{promo.title}</h3>
                      <p className="text-xs text-gray-600">{promo.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className="flex-shrink-0 flex items-center space-x-2"
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon name={category.icon as any} size={16} />
                <span className="whitespace-nowrap">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">
              {selectedCategory === 'all' ? 'Все товары' : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <div className="flex items-center space-x-4">
              <Select defaultValue="popular">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-asc">Сначала дешевые</SelectItem>
                  <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="discount">По размеру скидки</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-200">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-2 relative overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <Icon name="Package" size={32} className="text-gray-400" />
                      </div>
                      {product.discount > 0 && (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                          -{product.discount}%
                        </Badge>
                      )}
                      {product.isPromo && (
                        <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                          Акция
                        </Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-medium">Нет в наличии</span>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-1 mb-1">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={12} 
                            className={i < Math.floor(product.rating) ? "fill-current" : ""} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    <h4 className="font-medium text-sm line-clamp-2 leading-tight">
                      {product.name}
                    </h4>
                    
                    <p className="text-xs text-muted-foreground">{product.weight}</p>

                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-bold text-lg">{product.price} ₽</span>
                          {product.oldPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              {product.oldPrice} ₽
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full mt-3"
                      disabled={!product.inStock}
                      onClick={() => addToCart(product)}
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      {product.inStock ? 'В корзину' : 'Нет в наличии'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <span className="font-bold text-green-600">Пятёрочка</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Сеть супермаркетов с широким ассортиментом качественных товаров по доступным ценам
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-foreground">Возврат товара</a></li>
                <li><a href="#" className="hover:text-foreground">Программа лояльности</a></li>
                <li><a href="#" className="hover:text-foreground">Акции и скидки</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">О нас</a></li>
                <li><a href="#" className="hover:text-foreground">Вакансии</a></li>
                <li><a href="#" className="hover:text-foreground">Новости</a></li>
                <li><a href="#" className="hover:text-foreground">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 800 555-55-55</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@5ka.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Ежедневно с 8:00 до 23:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Пятёрочка. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground">Политика конфиденциальности</a>
              <a href="#" className="hover:text-foreground">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;