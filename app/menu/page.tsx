

export default function Menu() {
  const menuCategories = [
    {
      name: "Antipasti",
      items: [
        {
          name: "Bruschetta Classica",
          price: "12",
          description: "Grilled bread with fresh tomatoes, garlic, and basil",
        },
        { name: "Calamari Fritti", price: "16", description: "Crispy fried calamari with marinara sauce" },
        { name: "Caprese", price: "14", description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze" },
      ],
    },
    {
      name: "Pasta",
      items: [
        { name: "Spaghetti Carbonara", price: "22", description: "Classic carbonara with pancetta and egg" },
        { name: "Penne Arrabbiata", price: "20", description: "Spicy tomato sauce with garlic and red chilies" },
        { name: "Fettuccine Alfredo", price: "24", description: "Creamy parmesan sauce with fresh pasta" },
      ],
    },
    {
      name: "Secondi",
      items: [
        { name: "Osso Buco", price: "38", description: "Braised veal shank with saffron risotto" },
        { name: "Branzino", price: "34", description: "Grilled Mediterranean sea bass with herbs" },
        { name: "Bistecca Fiorentina", price: "45", description: "Grilled T-bone steak with rosemary" },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl mb-12 text-center">Our Menu</h1>

        <div className="space-y-16">
          {menuCategories.map((category) => (
            <section key={category.name}>
              <h2 className="font-serif italic text-[#cc3333] text-3xl mb-8 text-center">{category.name}</h2>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-[#cc3333]/20 pb-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-[#cc3333] text-xl">{item.name}</h3>
                      <span className="text-[#cc3333] font-serif">${item.price}</span>
                    </div>
                    <p className="text-[#cc3333]/80">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#cc3333] hover:bg-[#cc3333]/90 text-white px-8 py-3 rounded-full">
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </div>
  )
}

