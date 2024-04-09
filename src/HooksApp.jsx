// import { CounterApp,CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memo/Memorize';
import { MemoHook } from './06-memo/MemoHook';
import CallbackHook from './07-useCallback/CallbackHook';
import { TodoApp } from './08-useReducer/TodoApp';



export const HooksApp = () => {
    return (
       <>
       <h1>HooksApp</h1>
       <hr/>
       {/* <CounterApp /> */}
       {/* <CounterWithCustomHook/> */}
       {/* <SimpleForm /> */}
       {/* <SimpleFormWithCustomHook /> */}
       {/* <MultipleCustomHooks /> */}
       {/* <FocusScreen /> */}
       {/* <Layout /> */}
       {/* <Memorize />  */}
       {/* <MemoHook /> */}
       {/* <CallbackHook /> */}
       <TodoApp />
       </>
    );
}

