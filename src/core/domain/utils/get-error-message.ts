export function getErrorMessage(exception: Error) {
  return (
    (exception as any).response?.body ?? exception.stack ?? exception.message
  );
}
