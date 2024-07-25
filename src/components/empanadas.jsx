
export function Empanadas() {
  return (
    (<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-black">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold color-black"> La Valentina</h1>
      </header>
      <main className="px-6 py-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Hamburgers</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">1. Classic Burger</h3>
                <p className="text-sm text-muted-foreground">
                  Beef patty, lettuce, tomato, onion, pickles, ketchup, mustard
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">2. Bacon Cheeseburger</h3>
                <p className="text-sm text-muted-foreground">
                  Beef patty, bacon, cheddar cheese, lettuce, tomato, onion
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">3. Mushroom Swiss Burger</h3>
                <p className="text-sm text-muted-foreground">
                  Beef patty, sautéed mushrooms, Swiss cheese, lettuce, mayo
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">4. BBQ Bacon Burger</h3>
                <p className="text-sm text-muted-foreground">
                  Beef patty, bacon, cheddar cheese, BBQ sauce, onion rings
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">5. Avocado Burger</h3>
                <p className="text-sm text-muted-foreground">
                  Beef patty, avocado, pepper jack cheese, lettuce, tomato
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">6. Spicy Jalapeño Burger</h3>
                <p className="text-sm text-muted-foreground">
                  Beef patty, jalapeños, pepper jack cheese, lettuce, spicy mayo
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">7. Veggie Burger</h3>
                <p className="text-sm text-muted-foreground">Veggie patty, lettuce, tomato, onion, pickles, mustard</p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">8. Patty Melt</h3>
                <p className="text-sm text-muted-foreground">Beef patty, Swiss cheese, caramelized onions, rye bread</p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">9. Double Cheeseburger</h3>
                <p className="text-sm text-muted-foreground">
                  Two beef patties, American cheese, lettuce, tomato, onion
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">10. Bacon Swiss Deluxe</h3>
                <p className="text-sm text-muted-foreground">Beef patty, bacon, Swiss cheese, lettuce, tomato, mayo</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}
