import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedEvent } from '__mocks__';
import { BBQEvent, Guest } from 'features/BBQ/BBQtypes';
import toast from 'react-hot-toast';
import { convertBackToNumber } from 'utils/currencyUtils';

type BBQState = {
  events: BBQEvent[];
};

const initialState: BBQState = {
  events: [{ ...mockedEvent }],
};

const bbqSlice = createSlice({
  name: 'bbq',
  initialState,
  reducers: {
    createEvent: (state, action: PayloadAction<BBQEvent>) => {
      state.events.push({
        ...action.payload,
        amount: convertBackToNumber(String(action.payload.amount)),
        amountWithBeer: convertBackToNumber(
          String(action.payload.amountWithBeer),
        ),
      });
      toast.success(`Churras "${action.payload.title}" criado!`);
    },
    removeEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload,
      );
      toast.success(`Churras removido!`);
    },
    addGuest: (
      state,
      action: PayloadAction<{ eventId: string; guest: Guest }>,
    ) => {
      const event = state.events.find((e) => e.id === action.payload.eventId);

      if (event) {
        event.guests.push({
          ...action.payload.guest,
          amount: action.payload.guest.withBeer
            ? convertBackToNumber(String(action.payload.guest.amount)) +
              event.amountWithBeer
            : convertBackToNumber(String(action.payload.guest.amount)),
        });
        toast.success(
          `Participante "${action.payload.guest.name}" adicionado!`,
        );
      }
    },
    removeGuest: (
      state,
      action: PayloadAction<{ eventId: string; guestId: string }>,
    ) => {
      const event = state.events.find((e) => e.id === action.payload.eventId);
      if (event) {
        event.guests = event.guests.filter(
          (p) => p.id !== action.payload.guestId,
        );
        toast.success(`Participante removido!`);
      }
    },
    handlePayment: (
      state,
      action: PayloadAction<{
        eventId: string;
        guestId: string;
        confirmed: boolean;
      }>,
    ) => {
      const event = state.events.find((e) => e.id === action.payload.eventId);
      if (event) {
        const guest = event.guests.find((p) => p.id === action.payload.guestId);
        if (guest) {
          guest.confirmed = action.payload.confirmed;
          toast.success(
            `Participante "${guest.name}" ${
              action.payload.confirmed ? 'confirmado(a)' : 'não confirmado(a)'
            }!`,
          );
        }
      }
    },
  },
});

export const {
  createEvent,
  removeEvent,
  addGuest,
  removeGuest,
  handlePayment,
} = bbqSlice.actions;

export const selectEvents = (state) => state.bbq.events;

export default bbqSlice.reducer;
