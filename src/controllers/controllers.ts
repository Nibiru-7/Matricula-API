import { Request, Response } from 'express';
import { pool } from '../database/mysql';

// Función generadora
const generateController = (table: string, alias: string) => async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM ${table}`);
    res.json(rows);
  } catch (error) {
    console.error(`Error al obtener ${alias}:`, error);
    res.status(500).json({ message: `Error al obtener ${alias}` });
  }
};

export const getDataAlumno = generateController('pract_11_data_alumno', 'alumno');
export const getDataApoderado = generateController('pract_11_data_apoderado', 'apoderado');
export const getDataArea = generateController('pract_11_data_area', 'area');
export const getDataCliclo = generateController('pract_11_data_ciclo', 'ciclo');
export const getDataCurso = generateController('pract_11_data_curso', 'curso');
export const getDataDescuento = generateController('pract_11_data_descuento', 'descuento');
export const getDataEstadoMatricula = generateController('pract_11_data_estadomatricula', 'estadomatricula');
export const getDataFecha = generateController('pract_11_data_fecha', 'fecha');
export const getDataMatricula = generateController('pract_11_data_matricula', 'matricula');
export const getDataMediosPago = generateController('pract_11_data_mediospago', 'mediospago');
export const getDataModalidad = generateController('pract_11_data_modalidad', 'modalidad');
export const getDataPrograma = generateController('pract_11_data_programa', 'programa');
export const getDataSucursales = generateController('pract_11_data_sucursales', 'sucursales');
export const getDataTipoServicios = generateController('pract_11_data_tiposervicios', 'tiposervicios');
export const getDataTurno = generateController('pract_11_data_turno', 'turno'); 


