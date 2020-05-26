import { Flat } from '../models/flat';
import { database } from '../../lib/database';
import { Request, Response } from 'express';
import * as flatSerializer from '../serializers/flat';
import { QueryBuilder } from 'knex';


export const index = async (req: Request, res: Response) => {
  try {
    let query: QueryBuilder = database('flats').select();
    if (req.query.limit) {
      query = query.limit(req.query.limit);
    }
    if (req.query.offset) {
      query = query.offset(req.query.offset);
    }
    const flats: Array<Flat> = await query;
    res.json(flatSerializer.index(flats));
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const flat: Flat = await database('flats').select().first();
    if (flat) {
      res.json(flatSerializer.show(flat));
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const flat: Flat = {
      title: req.body.title,
      price: req.body.price,
      floorArea: req.body.floorArea,
      country: req.body.country,
      zip: req.body.zip,
      city: req.body.city,
      street: req.body.street

    }
    await database('flats').insert(flat);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const flat: Flat = {
        title: req.body.title,
        price: req.body.price,
        floorArea: req.body.floorArea,
        country: req.body.country,
        zip: req.body.zip,
        city: req.body.city,
        street: req.body.street
    };
    await database('flats').update(flat).where({ id: req.params.id });
    res.send(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    await database('flats').delete().where({ id: req.params.id });
    res.send(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

