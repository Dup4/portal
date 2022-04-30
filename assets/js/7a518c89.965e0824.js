"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[8266],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(m,c(c({ref:t},h),{},{components:n})):r.createElement(m,c({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5446:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),c=["components"],o={},l={unversionedId:"blog/cache/redis-cache",id:"blog/cache/redis-cache",isDocsHomePage:!1,title:"go-zero cache design for persistence layer cache",description:"Cache design principles",source:"@site/docs/blog/cache/redis-cache.md",sourceDirName:"blog/cache",slug:"/blog/cache/redis-cache",permalink:"/docs/blog/cache/redis-cache",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/cache/redis-cache.md",version:"current",lastUpdatedAt:1651324117,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"blog",previous:{title:"DB caching mechanism",permalink:"/docs/blog/cache/cache"},next:{title:"go-zero cache design for business-level caching",permalink:"/docs/blog/cache/business-cache"}},s=[{value:"Cache design principles",id:"cache-design-principles",children:[]},{value:"Explanation of caching code",id:"explanation-of-caching-code",children:[{value:"1. Primary key based caching logic",id:"1-primary-key-based-caching-logic",children:[]},{value:"2. Caching logic based on unique index",id:"2-caching-logic-based-on-unique-index",children:[]}]}],h={toc:s};function d(e){var t=e.components,o=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cache-design-principles"},"Cache design principles"),(0,i.kt)("p",null,"We only delete caches, we don't update them. Once the data in the DB is modified, we delete the corresponding cache directly instead of updating it."),(0,i.kt)("p",null,"Let's see how to delete the cache in the right order."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Delete the cache first, then update the DB")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"redis-cache-01",src:n(2555).Z})),(0,i.kt)("p",null,"Let's look at the case of two concurrent requests. A requests to update the data and deletes the cache first, then B requests to read the data, at this time the cache has no data, it will load the data from DB and write back to the cache, then A updates the DB, then at this time the data in the cache will remain dirty until the cache expires or there is a new request to update the data. As shown in the figure"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"redis-cache-02",src:n(6560).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Update the DB first, then delete the cache"),(0,i.kt)("p",{parentName:"li"},"![redis-cache-03]","(. /../resource/redis-cache-03.png)"))),(0,i.kt)("p",null,"A request to update the DB first, then B request to read the data, at this time the return is the old data, at this time can be considered as A request has not been updated, the final consistency, can be accepted, and then A deleted the cache, subsequent requests will get the latest data, as shown in the figure\n",(0,i.kt)("img",{alt:"redis-cache-04",src:n(3424).Z})),(0,i.kt)("p",null,"Let's look at the normal request flow again."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first request updates the DB and deletes the cache"),(0,i.kt)("li",{parentName:"ul"},"The second request reads the cache and has no data, so it reads the data from the DB and writes it back to the cache"),(0,i.kt)("li",{parentName:"ul"},"Subsequent read requests can all read directly from the cache\n",(0,i.kt)("img",{alt:"redis-cache-05",src:n(1019).Z}))),(0,i.kt)("p",null,"Let's look at what happens with DB queries, assuming there are seven columns of data in the row record ABCDEFG."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A request that queries only part of the column data, such as a request for ABC, CDE or EFG among them, as in the figure\n",(0,i.kt)("img",{alt:"redis-cache-06",src:n(8999).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Query a single complete row of records, as shown\n","![redis-cache-07]","(. /../resource/redis-cache-07.png)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Query multiple rows of records with some or all columns, as in\n","![redis-cache-08]","(. /../resource/redis-cache-08.png)"))),(0,i.kt)("p",null,"For the above three cases, first, we do not use partial queries because partial queries cannot be cached, and once cached, there is no way to locate what data needs to be deleted once the data is updated; second, for multi-row queries, according to the actual scenario and needs, we will establish the corresponding mapping from query conditions to primary keys in the business layer; and for single-row complete record queries, go-zero has a built-in complete cache management approach. So the core principle is: ",(0,i.kt)("strong",{parentName:"p"},"go-zero must cache complete row records"),"."),(0,i.kt)("p",null,"Let's detail the three built-in cache handling scenarios for go-zero."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Primary key-based caching",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"PRIMARY KEY (``id``)\n")))),(0,i.kt)("p",null,"This is relatively the easiest cache to handle, just use the primary key as the key to cache row records in redis."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Caching based on unique indexes\n",(0,i.kt)("img",{alt:"redis-cache-09",src:n(7134).Z}))),(0,i.kt)("p",null,"In the database design, if you look up data by index, the engine will first look up the primary key in the index->primary key tree and then look up the row records by the primary key, which introduces an indirect layer to solve the problem of index-to-row record correspondence. The same principle is used in go-zero's cache design."),(0,i.kt)("p",null,"Index-based caching is divided into single-column unique indexes and multi-column unique indexes."),(0,i.kt)("p",null,"But for go-zero, single-column and multi-column are just different ways to generate cache keys, the control logic behind them is the same. Then go-zero has built-in cache management to better control data consistency issues, and also built-in to prevent cache breakthroughs, penetrations, and avalanches (these were carefully discussed during the gopherchina conference, see the subsequent gopherchina sharing video)."),(0,i.kt)("p",null,"In addition, go-zero has built-in statistics for cache accesses and access hits, as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"dbcache(sqlc) - qpm: 5057, hit_ratio: 99.7%, hit: 5044, miss: 13, db_fails: 0\n")),(0,i.kt)("p",null,"You can see more detailed statistics, so that we can analyze the cache usage. For cases where the cache hit rate is very low or the request volume is very small, we can remove the cache, which can also reduce the cost."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The single column unique index is as follows."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"UNIQUE KEY `product_idx` (`product`)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A multi-column unique index is as follows."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"UNIQUE KEY `vendor_product_idx` (`vendor`, `product`)\n")))),(0,i.kt)("h2",{id:"explanation-of-caching-code"},"Explanation of caching code"),(0,i.kt)("h3",{id:"1-primary-key-based-caching-logic"},"1. Primary key based caching logic"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"redis-cache-10",src:n(9955).Z})),(0,i.kt)("p",null,"The concrete implementation code is as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (cc CachedConn) QueryRow(v interface{}, key string, query QueryFn) error {\n  return cc.cache.Take(v, key, func(v interface{}) error {\n    return query(cc.db, v)\n  })\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Take")," method here is to go through the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," to get the data from the cache first, if you get it, return it directly, if not, then go through the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," method to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DB")," to read the full row and write it back to the cache, and then return the data. The whole logic is still relatively simple to understand."),(0,i.kt)("p",null,"Let's look at the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Take")," in detail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (c cacheNode) Take(v interface{}, key string, query func(v interface{}) error) error {\n  return c.doTake(v, key, query, func(v interface{}) error {\n    return c.SetCache(key, v)\n  })\n}\n")),(0,i.kt)("p",null,"The logic of ",(0,i.kt)("inlineCode",{parentName:"p"},"Take")," is as follows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find the data from the cache using the key"),(0,i.kt)("li",{parentName:"ul"},"If found, return the data"),(0,i.kt)("li",{parentName:"ul"},"If not found, use the query method to read the data"),(0,i.kt)("li",{parentName:"ul"},"After reading, call c.SetCache(key, v) to set the cache")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"doTake")," code and explanation are as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// v - The data object to be read\n// key - The cache key\n// query - The Method used to read complete data from DB\n// cacheVal - Thme Method used to write cache\nfunc (c cacheNode) doTake(v interface{}, key string, query func(v interface{}) error,\n  cacheVal func(v interface{}) error) error {\n  // Use a barrier to prevent cache hitting and ensure that only one request is made to \n  // load the data corresponding to the key within a process\n  val, fresh, err := c.barrier.DoEx(key, func() (interface{}, error) {\n    // Read data from the cache\n    if err := c.doGetCache(key, v); err != nil {\n      // If it's a pre-placeholder (to prevent cache penetration), then return the pre-defined errNotFound\n      // If it's an unknown error, then return it directly, because we can't just drop the cache error and send all requests to the DB.\n      // This will hang the DB in a high concurrency scenario\n      if err == errPlaceholder {\n        return nil, c.errNotFound\n      } else if err != c.errNotFound {\n        // why we just return the error instead of query from db,\n        // because we don't allow the disaster pass to the DBs.\n        // fail fast, in case we bring down the dbs.\n        return nil, err\n      }\n\n      // Request DB\n      // If the returned error is errNotFound, then we need to set the placeholder in the cache to prevent cache penetration\n      if err = query(v); err == c.errNotFound {\n        if err = c.setCacheWithNotFound(key); err != nil {\n          logx.Error(err)\n        }\n\n        return nil, c.errNotFound\n      } else if err != nil {\n        // Statistics DB failure\n        c.stat.IncrementDbFails()\n        return nil, err\n      }\n\n      // Writing data to cache\n      if err = cacheVal(v); err != nil {\n        logx.Error(err)\n      }\n    }\n    \n    // Return json serialized data\n    return jsonx.Marshal(v)\n  })\n  if err != nil {\n    return err\n  }\n  if fresh {\n    return nil\n  }\n\n  // got the result from previous ongoing query\n  c.stat.IncrementTotal()\n  c.stat.IncrementHit()\n\n  // Write the data to the incoming v object\n  return jsonx.Unmarshal(val.([]byte), v)\n}\n")),(0,i.kt)("h3",{id:"2-caching-logic-based-on-unique-index"},"2. Caching logic based on unique index"),(0,i.kt)("p",null,"Because this block is more complex, I have marked the response blocks and logic with different colors. ",(0,i.kt)("inlineCode",{parentName:"p"},"block 2")," is actually the same as the primary key-based cache, so here we focus on the logic of ",(0,i.kt)("inlineCode",{parentName:"p"},"block 1"),".\n",(0,i.kt)("img",{alt:"redis-cache-11",src:n(2917).Z})),(0,i.kt)("p",null,"The block 1 part of the code block is divided into two cases."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The primary key can be found from the cache through the index, so the logic of ",(0,i.kt)("inlineCode",{parentName:"p"},"block 2")," will be done directly with the primary key, and the logic of the cache based on the primary key will be followed as above.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The primary key cannot be found from the cache through the index."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Search the complete row from DB by index, if there is ",(0,i.kt)("inlineCode",{parentName:"li"},"error"),", return"),(0,i.kt)("li",{parentName:"ul"},"When the complete row record is found, the cache of primary key to complete row record and index to primary key will be written to ",(0,i.kt)("inlineCode",{parentName:"li"},"redis")," at the same time."),(0,i.kt)("li",{parentName:"ul"},"Return the required row data")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// v - The data object to be read\n// key - Cache key generated by indexing\n// keyer - Method for generating primary key-based cache keys with primary keys\n// indexQuery - Method to read complete data from DB with index, need to return primary key\n// primaryQuery - Method to get complete data from DB with primary key\nfunc (cc CachedConn) QueryRowIndex(v interface{}, key string, keyer func(primary interface{}) string,\n  indexQuery IndexQueryFn, primaryQuery PrimaryQueryFn) error {\n  var primaryKey interface{}\n  var found bool\n\n  //  First query the cache by index to see if there is a cache of indexes to the primary key\n  if err := cc.cache.TakeWithExpire(&primaryKey, key, func(val interface{}, expire time.Duration) (err error) {\n    // If there is no index to the primary key cache, then query the complete data by index\n    primaryKey, err = indexQuery(cc.db, v)\n    if err != nil {\n      return\n    }\n\n    // The complete data is queried by the index, set found, and used directly later, no need to read data from the cache again\n    found = true\n    // Save the primary key to complete data mapping to the cache, the TakeWithExpire method already saves the index to primary key mapping to the cache\n    return cc.cache.SetCacheWithExpire(keyer(primaryKey), v, expire+cacheSafeGapBetweenIndexAndPrimary)\n  }); err != nil {\n    return err\n  }\n\n  // The data has already been found by the index, just return it\n  if found {\n    return nil\n  }\n\n  // Read data from the cache by primary key, and if the cache doesn't have it, read it from the DB by primaryQuery method and write back to the cache before returning the data.\n  return cc.cache.Take(v, keyer(primaryKey), func(v interface{}) error {\n    return primaryQuery(cc.db, v, primaryKey)\n  })\n}\n")),(0,i.kt)("p",null,"Let's look at a practical example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func (m *defaultUserModel) FindOneByUser(user string) (*User, error) {\n  var resp User\n  // Generate index-based key\n  indexKey := fmt.Sprintf("%s%v", cacheUserPrefix, user)\n  \n  err := m.QueryRowIndex(&resp, indexKey,\n    // Generate key for complete data cache based on primary key\n    func(primary interface{}) string {\n      return fmt.Sprintf("user#%v", primary)\n    },\n    // Index-based DB query method\n    func(conn sqlx.SqlConn, v interface{}) (i interface{}, e error) {\n      query := fmt.Sprintf("select %s from %s where user = ? limit 1", userRows, m.table)\n      if err := conn.QueryRow(&resp, query, user); err != nil {\n        return nil, err\n      }\n      return resp.Id, nil\n    },\n    // Primary key-based DB query method\n    func(conn sqlx.SqlConn, v, primary interface{}) error {\n      query := fmt.Sprintf("select %s from %s where id = ?", userRows, m.table)\n      return conn.QueryRow(&resp, query, primary)\n    })\n  \n  // error handling, need to determine whether the return is sqlc.ErrNotFound, if so, we use this package definition of ErrNotFound return\n  // Avoid user awareness of whether the cache is being used, and also isolate the underlying dependencies\n  switch err {\n    case nil:\n      return &resp, nil\n    case sqlc.ErrNotFound:\n      return nil, ErrNotFound\n    default:\n      return nil, err\n  }\n}\n')),(0,i.kt)("p",null,"All of the above automatic cache management code is available via ",(0,i.kt)("a",{parentName:"p",href:"../../goctl/goctl"},"goctl"),", and our team's internal ",(0,i.kt)("inlineCode",{parentName:"p"},"CRUD")," and cache are basically generated via ",(0,i.kt)("a",{parentName:"p",href:"../../goctl/goctl"},"goctl"),", which saves a lot of development time, and the cache code itself is very error-prone, and even with good code experience, it's hard to get it right every time, so we recommend using automatic cache code generation tools to avoid errors whenever possible."))}d.isMDXComponent=!0},2555:function(e,t,n){t.Z=n.p+"assets/images/redis-cache-01-c05028cdbb789f3f929f0c0dd8a39c92.png"},6560:function(e,t,n){t.Z=n.p+"assets/images/redis-cache-02-5c1917bc768c456848139d89b935cd86.png"},3424:function(e,t,n){t.Z=n.p+"assets/images/redis-cache-04-54b4f221ab656d99239263735576e561.png"},8999:function(e,t,n){t.Z=n.p+"assets/images/redis-cache-06-e590e267d43fcbae67d43f6507258033.png"},7134:function(e,t){t.Z="data:image/webp;base64,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"},9955:function(e,t,n){t.Z=n.p+"assets/images/redis-cache-10-cb86054e7a45b09579b82edb6da98613.png"},2917:function(e,t,n){t.Z=n.p+"assets/images/redis-cache-11-c2989ee89c9f5f204d294bbed81f1bad.webp"}}]);