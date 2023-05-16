import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency: string = "$";
  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  })

  productsData: any[] = [
    {
      image: "https://testologia.site/burger-images/1.png",
      title: "Бургер чеддер & бекон",
      text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: "https://testologia.site/burger-images/2.png",
      title: "BBQ с беконом и курицей",
      text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      grams: 390
    },
    {
      image: "https://testologia.site/burger-images/3.png",
      title: "Дабл биф бургер",
      text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
      price: 10,
      basePrice: 10,
      grams: 420
    },
    {
      image: "https://testologia.site/burger-images/4.png",
      title: "Баварский бургер",
      text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: "https://testologia.site/burger-images/5.png",
      title: "Бекон чизбургер",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 220
    },
    {
      image: "https://testologia.site/burger-images/6.png",
      title: "Индиана бургер",
      text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 320
    },
    {
      image: "https://testologia.site/burger-images/7.png",
      title: "Вегги бургер",
      text: "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrice: 8,
      grams: 280
    },
    {
      image: "https://testologia.site/burger-images/8.png",
      title: "Плаксивый Джо",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
      price: 7,
      basePrice: 7,
      grams: 300
    },
    {
      image: "https://testologia.site/burger-images/9.png",
      title: "Двойной чиз бургер",
      text: "Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 11,
      basePrice: 11,
      grams: 400
    },
    {
      image: "https://testologia.site/burger-images/10.png",
      title: "Фрешбургер",
      text: "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      price: 9,
      basePrice: 9,
      grams: 300
    },
    {
      image: "https://testologia.site/burger-images/11.png",
      title: "Цуккини бургер",
      text: "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 320
    },
    {
      image: "https://testologia.site/burger-images/12.png",
      title: "Двойной бургер чеддар",
      text: "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 360
    }
  ]
  constructor(private fb: FormBuilder) {

  }
  scrollTo(target: HTMLElement,) {
    target.scrollIntoView({ behavior: "smooth" });
  }
  confirmOrder() {
    if (this.form.valid) {
      alert("Спасибо за заказ! Мы скоро свяжемся с вами!")
      this.form.reset();
    }
  }

  changeCurrency(): void {
    let newCurrency = "$";
    let coefficient = 1;

    if (this.currency === "$") {
      newCurrency = "₽";
      (coefficient = 77), 36;
    } else if (this.currency === "₽") {
      newCurrency = "BYR";
      (coefficient = 2), 52;
    } else if (this.currency === "BYR") {
      newCurrency = "¥";
      (coefficient = 135), 74;
    } else if (this.currency === "¥") {
      newCurrency = "KWD";
      coefficient = 0.31;
    } else if (this.currency === "KWD") {
      newCurrency = "€";
      coefficient = 0.91;
    }
    this.currency = newCurrency;

    this.productsData.forEach((item: any) => {
      item.price = +(item.basePrice * coefficient).toFixed(2)
    })
  }
}
