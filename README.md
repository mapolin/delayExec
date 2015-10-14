# delayExec
  >
    helper method for delayed execution of code
    delay will be restarted after the same callback (name) is 'resaved'

# Usage:

DelayExec(name, function, delay, scope);
  
```
@name::string -> the name of the callback, this is used in order to restart/remove a callback from the stack
  
@function::function -> callback to execute after @delay has expired and the callback isn't restarted
  
@delay[20]::number -> delay in ms before the callback is executed
  
@scope[window]::function|object -> scope to call the callback on
```
