import service from "./instance";

const eventService = {
    fetchByCourt: <T>(courtId: number) => service.get<T>(`/event/court/${courtId}`),
    fetch: <T>(id?: number) => service.get<T>(`/event/${id}`),
    create: <T>(data: any) => service.post<T>("/event", data),
    delete: <T>(id: number) => service.delete<T>(`/event/${id}`),
};

export default eventService;
