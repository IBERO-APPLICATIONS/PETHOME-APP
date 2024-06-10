import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { HomeRouter } from '../home/routes/HomeRouter';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useCheckAuth } from '../hooks/useCheckAuth';


export const AppRouter = () => { 

  const status =  useCheckAuth(); 

  if( status === 'checking' ){
    return <CheckingAuth />
  }

  return (
    <Routes>
        {
          status === 'authenticated'
          ? <Route path="/*" element={ <HomeRouter />} />
          : <Route path="/auth/*" element={ <AuthRouter />}/>
        }

        <Route path="/*" element={ <Navigate to='/auth/login' />} />

        {/* Login y registro */}
        {/* <Route path="/auth/*" element={ <AuthRouter />}/> */}

        {/* PetHome */}
        {/* <Route path="/*" element={ <HomeRouter />} /> */}
        
    </Routes>
  )
}
