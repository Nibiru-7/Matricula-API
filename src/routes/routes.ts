import { Router } from 'express';
import { verifyToken } from '../middlewares/auth';
import { loginController } from '../controllers/authController';
import {
  getDataAlumno,
  getDataApoderado,
  getDataArea,
  getDataCliclo,
  getDataCurso,
  getDataDescuento,
  getDataEstadoMatricula,
  getDataFecha,
  getDataMatricula,
  getDataMediosPago,
  getDataModalidad,
  getDataPrograma,  
  getDataSucursales,
  getDataTipoServicios,
  getDataTurno  
} from '../controllers/controllers';

const router = Router();

router.post('/login', loginController);
router.get('/alumno', verifyToken, getDataAlumno);
router.get('/apoderado', verifyToken, getDataApoderado);
router.get('/area', verifyToken, getDataArea);
router.get('/ciclo', verifyToken, getDataCliclo);
router.get('/curso', verifyToken, getDataCurso);
router.get('/descuento', verifyToken, getDataDescuento);
router.get('/estadomatricula', verifyToken, getDataEstadoMatricula);
router.get('/fecha', verifyToken, getDataFecha);
router.get('/matricula', verifyToken, getDataMatricula);
router.get('/mediospago', verifyToken, getDataMediosPago);
router.get('/modalidad', verifyToken, getDataModalidad);
router.get('/programa', verifyToken, getDataPrograma);
router.get('/sucursales', verifyToken, getDataSucursales);
router.get('/tiposervicios', verifyToken, getDataTipoServicios);
router.get('/turno', verifyToken, getDataTurno);

export default router;