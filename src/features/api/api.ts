import type { AboutUsSchema } from "../../schema/AboutUsSchema";

export async function submitForm(data: AboutUsSchema): Promise<AboutUsSchema> {
  const res = await fetch(
    "https://692c7e12c829d464006fb926.mockapi.io/unilab",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) throw new Error("Failed to Submit");

  return res.json();
}
