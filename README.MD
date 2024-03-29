# VK polls

Interview assignment for vk done over a weekend: feed with authentication via vk where you can create and respond to polls.

#### Done
- [x] Auth via VK with JWT for authenticating requests from frontend
- [x] Single feed which lazily loads polls on scrolling
- [x] Multi-answer and single-answer polls
- [x] Anonymous and public polls
- [x] Caching of all of the info needed to show polls (user info, votes, options)

#### TODO
- [ ] Unit tests for backend
- [ ] Logging for backend
- [ ] Jest tests for react components
- [ ] Cache order of not only last 10 polls in the feed, but arbitrary number of polls
- [ ] Analytics tab (fetch more user info from react api, add controller + react component to show this info,
    cache it in controller, draw pretty charts with chart js)
- [ ] In frontend add 'isLoading' and 'isError' vars to state of Presentational components to correctly show loading states and improve UX
- [ ] In frontend add error handlers to show when errors occur and don't silence them
- [ ] Refactor frontend env-dependant constant to fetch them from env (e.g. url fo the site to localhost when testing and to DO instance's ip in prod)
- [ ] Properly handle all emojies when passed as text in polls
- [ ] Get domain and install TLS on DO instance to support https
- [ ] and so much more...
## Structure

Laravel is mostly used for routing, migrations and hooking up mysql and memcached via facades.

- DB schema is in **database/migrations/**.
- Model classes with helper caching methods are in **app/**
- Controller classes are in **app/Http/Controllers**
- Routes are in **routes/**
- All frontend code is in **resources/js/** with base html template in **resources/views/welcome.blade.php**

For it to work you have to add .env file with DB and CACHE connection info, generated JWT secret and VK API info. This .env file is used in docker-compose.

Authentication works via passing JWT token from VkOAuthController via welcome.blade.php and immediately saving
it to local storage, and then passing it with every api request in 'Authorization' header. 
On the backend side JWT provider checks it and provides user model object via User facade (thanks, laravel).
