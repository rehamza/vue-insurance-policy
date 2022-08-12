
## Solution Explanation

When I started to write solution for this exercise I have compe up with 2 solution in my mind and both solution will work properly

Solution 1:
        Create only 1 route with home page and handle all logic for 4 pages(4 components for 4 pages and place these in home component) in 1 home component(parent) using boolean value to show page 1 and then page 2 so on

Solution 2: 
        Create 4 routes for 4 pages and all 4 components place with in pages and then handle using Link navigation to move to another page

These two solutions using different architectures 1 handling all things in 1 route and other use multiple routes to handle solution

I choose to go for solution 2 I beleive it is more flexible and low dependencies on each other let suppose in future we have to add new stage for example credit card details using form before "BUY" and if we are using Solution 2 we only just have to add route and new page and handle all things there and place new stage in any place according to requirement but if we use Solution 1 we have create new component (we will create for solution 2 as well) plus configure the home component(Parent) and it will becomes complex and more complex so its better to use Soltion 2(easy to add , low dependencies , low complexity) 

I Used the same pattern that default provided by Vue and used Vuex for data state managenent(we need user data to show in Summary page So it's better to use Vuex and get data in summary page to proceed Buy there are other option to use user page data in summary such as send data in route params and local storage but I thing Vuex is the better option if application will grow it will be very usefull)

For styling I used 1 global style.css file to handle global css if we have and also use the component base css to handle component css individually in components and it is scoped only to components where we defined


## Unit Testing using Jest
I wrote some unit tests using Jest and these test cases are only medium level not complex right at the moment

to run test cases use this command: npm run test:unit 