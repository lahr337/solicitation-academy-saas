import {
  extractText,
  getDocumentProxy,
} from "unpdf";

export async function extractPdfText(
  buffer: Buffer
): Promise<string> {
  try {
    // Convert Node Buffer to Uint8Array
    const uint8Array = new Uint8Array(
      buffer.buffer,
      buffer.byteOffset,
      buffer.byteLength
    );

    // Load the PDF
    const pdf = await getDocumentProxy(
      uint8Array
    );

    // Extract text from all pages
    const { text } = await extractText(pdf, {
      mergePages: true,
    });

    if (!text || text.trim().length < 50) {
      throw new Error(
        "PDF contains no readable text " +
          "(may be image-based)"
      );
    }

    return text;
  } catch (error) {
    console.error(
      "PDF extraction failed:",
      error
    );
    throw new Error(
      error instanceof Error
        ? error.message
        : "Could not extract text from PDF"
    );
  }
}