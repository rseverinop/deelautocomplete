1. What is the difference between Component and PureComponent? give an
an example where it might break my app.

A pure component is an independent entity in the hierarchy of react components, they just re-renders
when their props change or using shouldComponentUpdate Method in class component, and using react.memo,
is the equivalent of functional components.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

This could be dangerous since this can bring strange behavior in context api,
the main problem is that it can affect the sharing of data in the global state,
are props and state are not updated in a proper way

3. Describe 3 ways to pass information from a component to its PARENT.

    1 - Parents should pass a function to the child component, and share information.
    2 - Hooks
    3 - Global state management such as Flux, Mobx, Redux, or others. the way this project is built is a good example.

4. Give 2 ways to prevent components from re-rendering.
    
    1 - useMemo
    2 - Memo
    extra - PureFuncitons
    extra - useCallback

5. What is a fragment and why do we need it? Give an example where it might
break my app.

Fragments allow us to group lists of components without adding extra nodes to the dom.

6. Give 3 examples of the HOC pattern.

Higher-order components (HOC) are an advanced element for reusing logic in React components.

 1 - for example when you use this legacy way to connect react with redux example

  `connect(mapStateToProps, mapDispatchToProps)(DeelPage)`

 2 - Another good example is using react-router 
    `withRouter(DeelPage)`

 3 - or utilizing material-ui `withStyles(styles)(UserPage)`

7. what's the difference in handling exceptions in promises, callbacks and
async...await.

    For me the biggest difference in handling those async operations are 
    syntactic.

8. How many arguments does setState take and why is it async.
    setState can take more than two arguments, an object or a callback to update the state,
    the nature of setState is async because these methods change internal states in react.

9. List the steps needed to migrate a Class to Function Component.

    1 - analyze the lifecycle hooks of the class and what the equivalent is in functional components.
    2 - change the class to a function.
    3 - we don't need any more the render method, instead we just need to return what we want at the return.
    4 - we don't have this keyword here we have to define all methods in the file for example const onChangeHandler = (e:<type>) => ....
    5 - rid of the constructor.
    6 - chance life cycle hooks to react functional components hooks.

10. List a few ways styles can be used with components.
 1 - CSS Stylesheet
 2 - Inline styling (Commonly used with react native)
 3 - CSS Modules
 4 - external libraries as Styled-components

11. How to render an HTML string coming from the server.

We can use dangerouslySetInnerHTML, which obviusly is not recommended.