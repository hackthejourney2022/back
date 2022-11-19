export abstract class LocationDescriptionRepository {
    abstract get(iata: string): Promise<string>;
}
